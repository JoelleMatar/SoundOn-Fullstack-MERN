const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const UserSession = require("../../models/UserSession");

// Load User model
const User = require("../../models/User");




// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json("Errors occured during registration");
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                _id: req.body._id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                age: req.body.age
            });

            console.log("new user:" + newUser);
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});




// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    console.log("hi");
    const { errors, isValid } = validateLoginInput(req.body);

    console.log("kouks" + errors.email);
    console.log("isvalid" +isValid);
    // Check validation
    if (!isValid) {
        // alert("Invalid User, Password Incorrect!");
        return res.status(400).json(errors);
    }
    
    
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    email: user.email
                };
                console.log("user login:" + payload);

                const userSession = new UserSession();
                userSession.userId = user._id;
                userSession.save((err, doc) => {
                    if(err) {
                        return res.send({
                            success: false,
                            message: "Error: server error"
                        });
                    }
                    return res.send({
                        success: true,
                        message: "Valid signin",
                        token: doc._id
                    })
                })
                // Sign token
                // jwt.sign(
                //     payload,
                //     keys.secretOrKey,
                //     {
                //         expiresIn: 31556926 // 1 year in seconds
                //     },
                //     (err, token) => {
                //         res.json({
                //             success: true,
                //             token: "Bearer " + token
                //         });
                //     }
                // );

                
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

// @route POST api/users/verify
// @desc Login user and return JWT token
// @access Public
router.get("/verify", (req, res) => {
    const { query } = req;
    const { token } = query;

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: "Error: server error"
            });
        }

        if(sessions.length != 1) {
            return res.send({
                success: false,
                message: "Error: Invalid"
            });
        }
        else {
            return res.send({
                success: true,
                message: "Good"
            });
        }
    });
});

// @route POST api/users/verify
// @desc Login user and return JWT token
// @access Public
router.get("/logout", (req, res) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false 
    }, {
        $set: { 
            isDeleted: true 
        }
    }, null, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: "Error: server error"
            });
        }

        return res.send({
            success: true,
            message: "Good"
        });
    });
});

module.exports = router;

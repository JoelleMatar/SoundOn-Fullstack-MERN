const User = require("../../models/User");

module.exports = (app) => {
//   app.get('/api/counters', (req, res, next) => {
//     Counter.find()
//       .exec()
//       .then((counter) => res.json(counter))
//       .catch((err) => next(err));
//   });

//   app.post('/api/counters', function (req, res, next) {
//     const counter = new Counter();

//     counter.save()
//       .then(() => res.json(counter))
//       .catch((err) => next(err));
//   });


//Sign Up
app.post("/api/users/signup", (req, res, next) => {
    const { body } = req;
    const {
        firstName,
        lastName,
        password,
        phoneNumber,
        age
    } = body;
    let {
        email
    } = body;

    if(!firstName) {
        return res.send({
            success: false,
            message: "Error: Last name cannot be empty"
        });
    }
    if(!lastName) {
        return res.send({
            success: false,
            message: "Error: Last name cannot be empty"
        });
    }
    if(!email) {
        return res.send({
            success: false,
            message: "Error: Email cannot be empty"
        });
    }
    if(!password) {
        return res.send({
            success: false,
            message: "Error: password cannot be empty"
        });
    }
    if(!phoneNumber) {
        return res.send({
            success: false,
            message: "Error: Phone Number cannot be empty"
        });
    }
    if(!age) {
        return res.send({
            success: false,
            message: "Error: Age cannot be empty"
        });
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, previousUsers) => {
        if(err) {
            return res.send({
                success: false,
                message: "Error: Server error"
            });
        }
        else if(previousUsers.length > 0) {
            return res.send({
                success: false,
                message: "Error: Account already exists"
            });
        }
        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.phoneNumber = phoneNumber;
        newUser.age = age;

        newUser.save((err, user) => {
            if(err) {
                return res.send({
                    success: false,
                    message: "Error: Server error"
                });
            }
            return res.send({
                success: true,
                message: "Signed Up Successfully"
            });
        });
    });


});

}
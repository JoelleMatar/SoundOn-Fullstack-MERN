const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load User model
const Cart = require("../../models/Cart");


// @route POST api/shoppingCart
// @access Public
router.post("/shoppingCart", (req, res) => {
    var cart = new Cart(req.session.Cart);

    const order = new Cart({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        user: req.user,
        cart: cart
    });
    
    order.save(function(err, result) {
        req.flash("success", "Successfully purchased product");
        req.session.Cart = null;
        res.redirect("/");
    });
          
});

module.exports = router;
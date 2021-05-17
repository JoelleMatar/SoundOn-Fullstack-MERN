const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    console.log("data" +data);
    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    // Email checks
    if (Validator.isEmpty(data.email)) {
        // console.log(data.email);
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    console.log(errors.email, errors.password);
    console.log("errors"+errors);
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
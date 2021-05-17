const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
    data.age = !isEmpty(data.age) ? data.age : "";

    // Name checks
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    // Phone and age checks
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone Number field is required";
    }
    if (Validator.isEmpty(data.age)) {
        errors.age = "Age field is required";
    }
    console.log(errors);
    return {
        
        errors,
        isValid: isEmpty(errors)
    };
    
};
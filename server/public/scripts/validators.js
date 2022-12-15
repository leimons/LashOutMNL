const { body } = require('express-validator');

const loginValidation = [
    body('password').custom((value, { req }) => {
        console.log(value);
        if (value.length < 1) {
            throw new Error("Password cannot be empty");
        }
        return true;
    })
];

module.exports = (loginValidation)
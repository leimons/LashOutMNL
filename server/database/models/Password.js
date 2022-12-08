const mongoose = require('mongoose');

const PasswordSchema = new mongoose.Schema({
	Password: String
});

const Password = mongoose.model ('Password' , PasswordSchema);
module.exports = Password;

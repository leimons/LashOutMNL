const mongoose = require('mongoose');

const InclusionsSchema = new mongoose.Schema({
    mainProduct: String,
    Name: String,
    Description: String,
    Price: Number
});

const Inclusions = mongoose.model ('Inclusions', InclusionsSchema);
module.exports = Inclusions;
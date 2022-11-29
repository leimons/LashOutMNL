const mongoose = require('mongoose');

const InclusionsSchema = new mongoose.Schema({
    Category: String,
    Name: String,
    Price: Number
});

const Inclusions = mongoose.model ('Inclusions', InclusionsSchema);
module.exports = Inclusions;

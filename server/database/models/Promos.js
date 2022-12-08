const mongoose = require('mongoose');

const PromosSchema = new mongoose.Schema({
    Category: String,
    Name: String,
    Percent: Number
});

const Promos = mongoose.model ('Promos', PromosSchema);
module.exports = Promos;
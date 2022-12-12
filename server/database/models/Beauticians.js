const mongoose = require('mongoose');

const BeauticiansSchema = new mongoose.Schema({
    Name: String,
    Services: [String]
});

const Beauticians = mongoose.model ('Beauticians', BeauticiansSchema);
module.exports = Beauticians;

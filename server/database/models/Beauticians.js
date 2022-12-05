const mongoose = require('mongoose');

const BeauticiansSchema = new mongoose.Schema({
    Name: String,
    MondayAvailability: String,
    MondayTime: String,
    TuesdayAvailability: String,
    TuesdayTime: String,
	WednesdayAvailability: String,
    WednesdayTime: String,
	ThursdayAvailability: String,
    ThursdayTime: String,
	FridayAvailability: String,
    FridayTime: String,
	SaturdayAvailability: String,
    SaturdayTime: String,
	SundayAvailability: String,
    SundayTime: String,
});

const Beauticians = mongoose.model ('Beauticians', BeauticiansSchema);
module.exports = Beauticians;

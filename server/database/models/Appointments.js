const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    refNum: Number,
    ClientName: String,
    ClientInfo: String,
    PaymentStatus: Boolean
    //Add Date and Time
});

const Appointments = mongoose.model ('Appointments' , AppointmentsSchema);
module.exports = Appointments;
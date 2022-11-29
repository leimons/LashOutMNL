const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    SessionID: Number,
    refNum: Number,
    ClientName: String,
    ClientInfo: String,
    PaymentStatus: Boolean,
    Product: [String],
    Inclusions: [String],
    AmountDue: Number
    //Add Date and Time
});

const Appointments = mongoose.model ('Appointments' , AppointmentsSchema);
module.exports = Appointments;
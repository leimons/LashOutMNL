const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    SessionID: Number,
    refNum: Number,
    ClientName: String,
    ClientEmail: String,
    CleintContact: String,
    Service: String,
    Inclusions: [String],
    AmountDue: Number,
    Schedule: String
});

const Appointments = mongoose.model ('Appointments' , AppointmentsSchema);
module.exports = Appointments;
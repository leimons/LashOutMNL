const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    refNum: Number,
    ClientName: String,
    ClientEmail: String,
    CleintContact: String,
    Service: String,
    Inclusions: [String],
    AmountDue: Number,
    Schedule: String,
    PaymentProof:{
        data: Buffer,
        contentType: String
    }
});

const Appointments = mongoose.model ('Appointments' , AppointmentsSchema);
module.exports = Appointments;
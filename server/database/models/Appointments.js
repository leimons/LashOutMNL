const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    refNum: Number,
    ClientName: String,
    ClientEmail: String,
    ClientContact: String,
    Service: String,
    Inclusions: [String],
    AmountDue: Number,
    Beautician: String,
    Schedule: String,
    PaymentProof:{
        data: Buffer,
        contentType: String
    }
});

const Appointments = mongoose.model ('Appointments' , AppointmentsSchema);
module.exports = Appointments;

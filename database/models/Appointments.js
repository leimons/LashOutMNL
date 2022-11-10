const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
    refNum: Number,
    ClientName: String,
    ClientInfo: String,
    PaymentStatus: Boolean,
    apMonth: Number,
    apDay: Number,
    apYear: Number,
    apHour: Number,
    apMinute: Number
    
});

const Appointments = mongoose.model ('Appointments' , AppointmentsSchema);
module.exports = Appointments;

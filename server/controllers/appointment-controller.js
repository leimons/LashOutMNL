const db = require("../database/models/db");
const Appointment = require('../models/Appointments.js');

const ap_controller = {

/*add Appointment
	given the info from the req, it will insert one to the Appointment database
	modeled after CCAPDEV MCO3
*/
	ap_add: function(req, res) {
        console.log("inserting: " + req.query.refNum);
        db.insertOne(Appointment, req.query, function(){}); 
		console.log(req.query.refNum + "added");
    },
/*delete Appointment
	given the name, it deletes the Appointment from the database 
	modeled after CCAPDEV MCO3
	used to cancel appointments
*/
	ap_cancel: function (req, res) {
		var ref = req.query.refNum;
		var client = req.query.ClientName
        console.log("deleting: " + ref);
        db.deleteOne(Appointment,{refNum:ref}, function(){});
		console.log("appointment of " + client + "has been cancelled");
    },
/*edit Appointment
	used for rescheduling
	only edits date and time variable

	ap_reschedule: function(req, res) {
        console.log("rescheduling: " + req.query.refNum);
        db.updateOne({name: s_name}); //date/time variables to be added
		console.log(s_name + " rescheduled");
	}
*/
} 

module.exports = ap_controller;

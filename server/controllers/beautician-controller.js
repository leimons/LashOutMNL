const db = require("../database/models/db");
const Beautician = require('../database/models/Beauticians.js');

const bea_controller = {
	bea_add: function(req, res) {
        console.log("inserting: " + req.query.Name);
        db.insertOne(Beautician, req.body, function(){}); 
	console.log(req.query.Name + "added");
	res.status(201).send();
    	},
	
	bea_delete: function (req, res) {
	var ref = req.body._id;
	var beauticianName = req.body.Name
        console.log("deleting: " + beauticianName);
        db.deleteOne(Beautician,{_id:ref}, function(){});
	console.log("Beautician " + beauticianName + " has been removed");
	res.status(201).send();
    	},
	
	bea_schedule_change: function(req, res) {
	var ref = req.body._id;
        console.log("updating: "+req.body.Name);
        db.updateOne({_id:ref},{Name:req.body.name});
	console.log(s_name + " updated");
	res.status(201).send();
	}
} 

module.exports = bea_controller;

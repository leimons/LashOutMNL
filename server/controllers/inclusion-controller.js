const db = require("../database/models/db");
const Inclusions = require('../models/Inclusion.js');

const i_controller = {
	i_add: function(req, res) {
        console.log("inserting: " + req.query.Name);
        db.insertOne(Inclusions, req.query, function(){}); 
		console.log(req.query.Name + "added");
    	},
	
	i_delete: function (req, res) {
	var InclusionsName = req.query.Name
        console.log("deleting: " + InclusionsName);
        db.deleteOne(Inclusions,{Name:InclusionsName}, function(){});
		console.log("Inclusions " + InclusionsName + " has been removed");
    	},
	
	i_edit: function(req, res) {
	var ref = req.query._id;
        console.log("updating: "+req.query.Name);
        db.updateOne({_id:ref},{Name:req.query.Name},{Category: req.query.Category},{Price: req.query.Price});
		console.log(ref + " updated");
	}
} 

module.exports = i_controller;
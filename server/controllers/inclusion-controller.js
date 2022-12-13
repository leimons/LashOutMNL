const db = require("../database/models/db");
const Inclusions = require('../database/models/Inclusions.js');

const i_controller = {
	i_add: function(req, res) {
        console.log("inserting: " + req.body.Name);
        db.insertOne(Inclusions, req.body, function(){}); 
	console.log(req.body.Name + "added");
	res.status(201).send();
    	},
	
	i_delete: function (req, res) {
	var InclusionsName = req.body.Name
        console.log("deleting: " + InclusionsName);
        db.deleteOne(Inclusions,{Name:InclusionsName}, function(){});
	console.log("Inclusions " + InclusionsName + " has been removed");
	res.status(201).send();
    	},
	
	i_edit: function(req, res) {
	var ref = req.body._id;
        console.log("updating: "+req.body.Name);
        db.updateOne({_id:ref},{Name:req.body.Name},{Category: req.body.Category},{Price: req.body.Price});
	console.log(ref + " updated");
	res.status(201).send();
	}
} 

module.exports = i_controller;

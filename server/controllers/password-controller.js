const db = require("../database/models/db");
const Password = require('../database/models/Password.js');

const pass_controller = {

/*add password
	given the info from the req, it will insert one to the password database
	modeled after CCAPDEV MCO3

	pass_add: function(req, res) {
        console.log("inserting: " + req.body.Password);
        db.insertOne(Password, req.body, function(){});
		console.log(req.body.Password + "added");
    },
*/
/*delete promos
	given the name, it deletes the password from the database 
	modeled after CCAPDEV MCO3

	pass_delete: function (req, res) {
		var refname = req.body.Password;
		var refID = req.body._id;
        console.log("deleting Password");
        db.deleteOne(Password,{_id: refID}, function(){});
		console.log("Password deleted");
    },
*/
/*edit promos
*/
	pass_edit: function(req, res) {
		var p_id = req.body._id;
		var p_name = req.body.Password;
        	console.log("updating Password");
        	db.updateOne(Password,{_id: p_id},{Password:p_name}, function(){});
		console.log("Password Updated");
		res.status(201).send();
	}

} 

module.exports = pass_controller;

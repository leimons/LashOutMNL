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
		var new_pass = req.body.Password;
		var p_name = req.body.OldPass;
		db.findOne(Password, {}, "Password", function(result){
            console.log("updating Password");
			if (p_name == result.Password){
			db.updateOne(Password,{_id: result._id},{Password:new_pass}, function(){});
			console.log("Password Updated");
			res.status(201).send();
			}
			else{
				res.sendStatus(403);
				console.log("Wrong Old Password");
			}
		 })
		}
		
	} 

module.exports = pass_controller;

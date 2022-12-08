const db = require("../database/models/db");
const Promos = require('../database/models/Promos.js');

const p_controller = {

/*add product
	given the info from the req, it will insert one to the product database
	modeled after CCAPDEV MCO3
*/
	p_add: function(req, res) {
        console.log("inserting: " + req.body.Name);
        db.insertOne(Promos, req.body, function(){});
		console.log(req.body.Name + "added");
    },
/*delete promos
	given the name, it deletes the product from the database 
	modeled after CCAPDEV MCO3
*/
	p_delete: function (req, res) {
		var refname = req.body.Name;
		var refID = req.body._id;
		console.log(refID + " " + refname);
        console.log("deleting: " + refname);
        //db.deleteOne(Promos,{_id: refID}, function(){});
		console.log(refname + " deleted");
    },
/*edit promos
*/
	p_edit: function(req, res) {
		var p_id = req.body._id;
		var p_name = req.body.Name;
		var p_category = req.body.Category;
		var p_percent = req.body.Percent;
        	console.log("updating: "+p_name);
        	db.updateOne(Promos,{_id: p_id},{Name:p_name, Category:s_category,Percent:p_percent}, function(){});
		console.log(p_name + " updated");
	}

} 

module.exports = promo_controller;

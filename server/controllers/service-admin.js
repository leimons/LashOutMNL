const db = require('../models/db.js');
const Service = require('../models/Products.js');

const sv_controller = {

/*add service
	given the info from the req, it will insert one to the service database
	modeled after CCAPDEV MCO3
*/
	sv_add: function(req, res) {
        console.log("inserting: " + req.query.name);
        db.insertOne(Service, req.query, function(){});
		console.log(req.query.name + "added");
    },
/*delete service
	given the name, it deletes the service from the database 
	modeled after CCAPDEV MCO3
*/
	sv_delete: function (req, res) {
		var refname = req.query.name;
        console.log("deleting: " + refname);
        db.deleteOne(Service,{name:refname}, function(){});
		console.log(refname + " deleted");
    },
/*edit service
*/
	sv_edit: function(req, res) {
		var s_name = req.query.name;
		var n_name = req.query.new_name;
		var s_category = req.query.category;
		var s_description = req.query.description;
		var s_duration = req.query.duration;
		var s_price = req.query.price;
        console.log("updating: "+req.query.name);
        db.updateOne({name: s_name},{$set:{name:n_name}}, {$set:{category:s_category}}, {$set:{description:s_description}}, {$set:{duration:s_duration}} , {$set:{price:s_price}});
		console.log(s_name + " updated");
	}

} 

module.exports = sv_controller;
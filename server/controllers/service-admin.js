const db = require('../models/db.js');
const Product = require('../models/Products.js');
/*
UID: String
Service: String,
    Category: String,
    Subcategory: String,
    Duration: String,
    Price: Number,
    Description: String,
    OnSale: Boolean,
    SalePrice: Number*/
const sv_controller = {

/*add product
	given the info from the req, it will insert one to the product database
	modeled after CCAPDEV MCO3
*/
	sv_add: function(req, res) {
        console.log("inserting: " + req.query.Service);
        db.insertOne(Product, req.query, function(){});
		console.log(req.query.Service + "added");
    },
/*delete service
	given the name, it deletes the service from the database 
	modeled after CCAPDEV MCO3
*/
	sv_delete: function (req, res) {
		var refname = req.query.Service;
		var refID = requ.query.UID;
        console.log("deleting: " + refname);
        db.deleteOne(Service,{UID: req.query.UID}, function(){});
		console.log(refname + " deleted");
    },
/*edit service
*/
	sv_edit: function(req, res) {
		var s_name = req.query.Service;
		var s_category = req.query.Category;
		var s_subcategory = req.query.Subcategory;
		var s_description = req.query.Description;
		var s_duration = req.query.Duration;
		var s_price = req.query.price;
        console.log("updating: "+req.query.Service);
        db.updateOne({UID: req.query.UID},{$set:{Service:s_name}}, {$set:{Category:s_category}},{$set:{Subcategory:s_subcategory}, {$set:{Description:s_description}}, {$set:{Duration:s_duration}} , {$set:{Price:s_price}});
		console.log(s_name + " updated");
	}

} 

module.exports = sv_controller;

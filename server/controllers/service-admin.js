const db = require("../database/models/db");
const Product = require('../database/models/Products.js');

const sv_controller = {

/*add product
	given the info from the req, it will insert one to the product database
	modeled after CCAPDEV MCO3
*/
	sv_add: function(req, res) {
        console.log("inserting: " + req.body.Service);
        db.insertOne(Product, req.body, function(){});
		console.log(req.body.Service + "added");
    },
/*delete product
	given the name, it deletes the product from the database 
	modeled after CCAPDEV MCO3
*/
	sv_delete: function (req, res) {
		var refname = req.body.Service;
		var refID = requ.body._id;
        console.log("deleting: " + refname);
        db.deleteOne(Service,{_id: refID}, function(){});
		console.log(refname + " deleted");
    },
/*edit product
*/
	sv_edit: function(req, res) {
		var s_id = req.body._id;
		var s_name = req.body.Service;
		var s_category = req.body.Category;
		var s_subcategory = req.body.Subcategory;
		var s_description = req.body.Description;
		var s_duration = req.body.Duration;
		var s_price = req.body.Price;
		var s_onsale = req.body.OnSale;
		var s_saleprice = req.body.SalePrice;
        	console.log("updating: "+s_name);
       		db.updateOne(Product,{_id: s_id},{Service:s_name, Category:s_category,Subcategory:s_subcategory,Description:s_description,Duration:s_duration,Price:s_price,OnSale: s_onsale,SalePrice:s_saleprice}, function(){});
		console.log(s_name + " updated");
	}

} 

module.exports = sv_controller;

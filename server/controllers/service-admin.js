const db = require("../database/models/db");
const Product = require('../database/models/Products.js');

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
/*delete product
	given the name, it deletes the product from the database 
	modeled after CCAPDEV MCO3
*/
	sv_delete: function (req, res) {
		var refname = req.query.Service;
		var refID = requ.query._id;
        console.log("deleting: " + refname);
        db.deleteOne(Service,{_id: refID}, function(){});
		console.log(refname + " deleted");
    },
/*edit product
*/
	sv_edit: function(req, res) {
		var s_name = req.query.Service;
		var s_category = req.query.Category;
		var s_subcategory = req.query.Subcategory;
		var s_description = req.query.Description;
		var s_duration = req.query.Duration;
		var s_price = req.query.Price;
		var s_onsale = req.query.OnSale;
		var s_saleprice = req.query.SalePrice;
        console.log("updating: "+req.query.Service);
        db.updateOne({_id: req.query._id},{$set:{Service:s_name}}, {$set:{Category:s_category}},{$set:{Subcategory:s_subcategory}}, {$set:{Description:s_description}}, {$set:{Duration:s_duration}} , {$set:{Price:s_price}}, {$set:{OnSale: s_onsale}}, {$set:{SalePrice:s_saleprice});
		console.log(s_name + " updated");
	}

} 

module.exports = sv_controller;

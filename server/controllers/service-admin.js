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
		res.status(201).send();	
    },
/*delete product
	given the name, it deletes the product from the database 
	modeled after CCAPDEV MCO3
*/
	sv_delete: function (req, res) {
		var refname = req.body.Service;
		var refID = req.body._id;
		console.log(refID+ " " + refname);
        	console.log("deleting: " + refname);
        	db.deleteOne(Product,{_id: refID}, function(){});
		console.log(refname + " deleted");
		res.status(201).send();
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
		db.updateOne(Product,{_id: s_id},{Service:s_name, Category:s_category,Subcategory:s_subcategory,Description:s_description,Duration:s_duration,OnSale: s_onsale}, function(){});
		if(s_price > 0 && s_price > s_saleprice && s_saleprice > 0){
		db.updateOne(Product,{_id: s_id},{Price:s_price,SalePrice:s_saleprice}, function(){});
		}
		else{
			if (s_price < s_saleprice){
			console.log("saleprice cannot be higher than base price");}
			if (s_price < 0){
			console.log("price cannot be lower than 0");}
			if (s_saleprice < 0){
			console.log("saleprice cannot be lower than 0");}
		}
		
		console.log(s_name + " updated");
		res.status(201).send();
	}

} 

module.exports = sv_controller;

const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");

const controller = {

    getServices: function (req, res) {
        var category = req.query.category;

        var projection = "-_id Name Category Description Duration Price"; // "-_id" excludes id field from data
        db.findMany(Products, {}, projection, (err, result) => {
            res.setHeader('Content-Type', 'application/json');

            if ( category ) {
                var filteredServices = result.filter((Category) => { return Category == category })
                res.send(filteredServices);
            } else {
                var services = result;
                res.send(services);
            }
        })
    },

    getCategories: (req, res) => {
        const categories = [
            {
                name: "Lashes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
                priceDescription: "starts at ₱550.00"
            },
            {
                name: "Lashes Retouch",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
                priceDescription: "starts at ₱500.00"
            },
            {
                name: "Nails",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
                priceDescription: "starts at ₱150.00"
            },
            {
                name: "Brows",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
                priceDescription: "starts at ₱4,000.00"
            },
            {
                name: "Brows Retouch",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
                priceDescription: "starts at ₱1,500.00"
            }
        ]
    
        res.setHeader('Content-Type', 'application/json');
        res.json(categories);
    },

    getInclusionsPage: function(req,res){
        productName = req.params.id;
        console.log(productName);
        //res.render('inclusions');
    }
}

module.exports = controller;
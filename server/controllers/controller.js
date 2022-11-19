const db = require("../database/models/db");
const Products = require("../database/models/Products");

const controller = {

    /*
        Returns the list of services. Has the option to select only services from a specific category
        through the `category` query or a specific subcategory from the `subcategory` query.
    */
    getServices: function (req, res) {
        var category = req.query.category;
        var subcategory = req.query.subcategory;

        var query = {};
        if (subcategory)
            query = {Subcategory: subcategory}
        else if (category)
            query = {Category: category}
        
        db.findMany(Products, query, {}, (result, err) => {
            if (err) {
                res.status(400);
                return null;
            }

            var services = result;
            res.json(services);
        })
    },

}

module.exports = controller;
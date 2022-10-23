const db = require("../database/models/db");
const Products = require("../database/models/Products");

const controller = {
    getHomePage: function (req,res){
        res.render ('index');

        var TempProduct = {
            Name: "Lash Curl",
            Description: "Curl Your Lashes",
            Price: 500
        }
        db.insertOne(Products, TempProduct, (err)=> {
            res.render ('index');
        })
    }
}

module.exports = controller;
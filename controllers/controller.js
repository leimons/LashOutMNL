const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");

const controller = {
    getHomePage: function (req,res){
        // Start of Code For Test, will be removed after*
        var TempProduct = {
            Name: "Lash Lift",
            Category: "Lashes",
            Description: "The natural lash is lifted from the roots semi-permanently. Lasts 1 to 3 months.",
            Price: 550
        }
        var TempAppointment = {
            refNum: 100021,
            ClientName: "Joe Mama",
            ClientInfo: "Covid Negative",
            PaymentStatus: false
        }
        db.insertOne(Appointments, TempAppointment, function(){

        });
        db.insertOne(Products, TempProduct, (err)=> {
            res.render ('index');
        });
        // End of Code for Test
    },

    getServicesPage: function (req, res) {

        projection = "Name Category Description Duration Price"
        
        db.findMany(Products, {}, projection,function(result){
            var data = result;
            var products = [];
            data.forEach((i) =>{
                products.push({Name: i.Name, Category: i.Category, Description: i.Description, Duration: i.Duration, Price: i.Price})
            })
            console.log(products)
            res.render('services', {serviceItem: products})
        })
    },

    getInclusionsPage: function(req,res){
        productName = req.params.id;
        console.log(productName);
        res.render('inclusions');

    }
}

module.exports = controller;
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
            Duration : "2 Hours",
            Price: 550
        }
        var TempProduct2 = {
            Name: "Lash Down",
            Category: "Lashes Retouch",
            Description: "The natural lash is lifted from the roots semi-permanently. Lasts 1 to 3 months.",
            Duration : "2 Hours",
            Price: 550
        }
        var TempProduct3 = {
            Name: "Lash Down",
            Category: "Brows",
            Description: "The natural lash is lifted from the roots semi-permanently. Lasts 1 to 3 months.",
            Duration : "2 Hours",
            Price: 550
        }
        var TempProduct4 = {
            Name: "Lash Down",
            Category: "Brows Retouch",
            Description: "The natural lash is lifted from the roots semi-permanently. Lasts 1 to 3 months.",
            Duration : "2 Hours",
            Price: 550
        }
        var TempProduct5 = {
            Name: "Lash Down",
            Category: "Nails",
            Description: "The natural lash is lifted from the roots semi-permanently. Lasts 1 to 3 months.",
            Duration : "2 Hours",
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
        
        db.insertMany(Products, [TempProduct, TempProduct2, TempProduct3, TempProduct4, TempProduct5], (err)=> {
            res.render("index");
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
    }
}

module.exports = controller;
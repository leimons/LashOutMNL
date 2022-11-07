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
            Duration: "1 Hour",
            Price: 550
        }
        var TempProduct2 = {
            Name: "Classic Full Set Retouch",
            Category: "Lashes Retouch",
            Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Classic Full Set (for ex. Hybrid Lashes, Wet Set or Volume Lashes), you will be charged with a new set price.",
            Duration: "1 Hour",
            Price: 500
        }
        var TempProduct3 = {
            Name: "Microblading",
            Category: "Brows",
            Description: "Microblading is a form of semi-permanent tattoo for eyebrows which uses individually drawn thin and crisp lines that resembles hair strokes to give the illusion of realistic, natural (yet full) looking brows. Although it’s not as deep as a traditional tattoo, it is still classed as a ‘tattoo’ as pigment is implanted under the skin’s surface. Inclusions: 1 Session, 1 Free Retouch (valid until 45th day of initial treatment) Effect: Natural looking hair-like strokes, Light finish to bold brow look Perfect for: Thin to no brows at all, Not to dense but not too sparse brows, Clients who want more natural style, Clients who don’t always wear makeup but want their brows to be always in shape",
            Duration: "3 Hours",
            Price: 4000
        }
        var TempProduct4 = {
            Name: "Brows Retouch (> 45 days healed)",
            Category: "Brows Retouch",
            Description: "1 Hour",
            Duration: "",
            Price: 1500
        }
        var TempProduct5 = {
            Name: "Hard Gel Manicure with Nail Polish and Regular Pedicure",
            Category: "Nails",
            Description: "",
            Duration: "1 Hour",
            Price: 900

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
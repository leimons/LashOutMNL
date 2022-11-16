const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");

const controller = {

    /*
        Returns the list of services. Has the option to select only services from a specific category
        through the `category` query.
    */
    getServices: function (req, res) {
        var category = req.query.category;
        var projection = "-_id Name Category Description Duration Price"; // "-_id" excludes id field from data
        
        db.findMany(Products, {}, projection, (result, err) => {
            if (err) {
                res.status(400);
                return null;
            }

            var services = result;

            if ( category ) {
                var filteredServices = services.filter((service) => { return service.Category == category })

                res.setHeader('Content-Type', 'application/json');
                res.send(filteredServices);
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.send(services);
            }
        }) 
    },

    /*
        Returns the list of categories. Price descriptions are automatically updated based on the 
        prices in the database.
    */
    getCategories: async (req, res) => {
        var categories = [
            {
                name: "Lashes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
            },
            {
                name: "Lashes Retouch",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
            },
            {
                name: "Nails",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
            },
            {
                name: "Brows",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
            },
            {
                name: "Brows Retouch",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", /* TODO: Update description */
            }
        ]

        /*
            Find lowest price for each category then add to `priceDescription`.
            Automatically adjusts price displayed when promos/discounts are active.
        */
        var services = await Products.find({}, "-_id Category Price"); // "-_id" excludes id field from result
        
        for (var category of categories) {
            let categoryServices = services.filter(service => service.Category == category.name);
            let categoryPrices = categoryServices.map(service => service.Price);
            let minPrice = Math.min(...categoryPrices);

            const options = { // for formatting price
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
            }

            category.priceDescription = `starts at ₱${ Number(minPrice).toLocaleString('en', options) }`;
        }

        res.setHeader('Content-Type', 'application/json');
        res.json(categories);
    },

    addAppointment: function (req,res){
        var product = req.body.product
        db.insertOne(Appointments, {Product: product},function(){     
        });
        res.status(201).send();
    },

    getInclusionsPage: function(req,res){
        productName = req.params.id;
        console.log(productName);
        //res.render('inclusions');
    }
}

module.exports = controller;
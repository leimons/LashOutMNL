const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");
const Inclusions = require("../database/models/Inclusions");
const dv = require("dayjs/locale/dv");

let refnum = '0';

const controller = {

    /*
        Returns the list of services. Has the option to select only services from a specific category
        through the `category` query.
    */
    getServices: async function (req, res) {
        if ( req.params.category ) {
            var category = req.params.category;

            var result = await Products.aggregate([
                { $match: { Category: category } },
                {
                    "$group": {
                        _id: "$Subcategory", // Group by subcategory
                        "name" :{ $last: '$Subcategory' }, 
                        "category" :{ $last: '$Category' }, 
                        services: { $push: "$$ROOT" }
                    }
                }
            ]);

            res.json(result);
        } 
        else {
            var { category, subcategory, id } = req.query;

            if (category)   // Find by category
                db.findMany(Products, {Category: category}, {}, (result) => {
                    res.json(result);
                });
            else if (subcategory)   // Find by subcategory
                db.findMany(Products, {Subcategory: subcategory}, {}, (result) => {
                    res.json(result);
                });
            else if (id)
                db.findOne(Products, {_id: id}, {}, (result) => {
                    res.json(result);
                });
            else
                res.json([]);
        }
    },

    addAppointment: function (req,res){
        var product = req.body.product
        var AmountDue = req.body.AmountDue
        var val = Math.floor(1000 + Math.random() * 9000);
        db.findMany(Appointments, {refnum: val} , 'refnum',function(result){
            /*while (result != undefined){
                val = Math.floor(1000 + Math.random() * 9000);
             } */
        });
        refnum = val;
        AmountDue = AmountDue.substring(1);
        AmountDue = parseFloat(AmountDue);
        console.log (typeof(AmountDue))
        db.insertOne(Appointments, {Product: product, refNum: refnum, AmountDue: AmountDue},function(){     
        });
        res.status(201).send();
    },

    addInclusions: function(req,res){
        var Inclusions = req.body.Inclusions //UID of Inclusion
        var InclusionCost = 0
        Inclusions.forEach((i)=>{
            db.findOne (Inclusions, {UID: i}, "Price", function(result){
                InclusionCost = InclusionCost + result
            })
        })
        db.updateOne(Appointments, {refNum: refnum}, {Inclusions: Inclusions, AmountDue: AmountDue+InclusionCost}, function(){
        })
        res.status(201).send();
    },

    addChosenDate: function(req,res){
        var Date = req.body.chosenDate
        db.updateOne(Appointments, {refNum: refnum}, {Date: Date}, function(){
            console.log("Added Appointment Date to DB")
            res.status(201).send();
        })
    },

    addClientDetails: function(req,res){
        /* query client details */
        /* create object of details fit for db */
        db.updateOne(Appointments, refnum , /*object: object, */ function(){
        });
    },

    getInclusionsPage: function(req,res){
        db.findOne(Appointments, {refNum: refnum}, "Product", function(result){
            var productName = result.Product
            console.log("The Product is: " + productName);
            db.findOne(Products, {Service: productName}, "Category", function(result){
                var productCategory = result.Category
                var inclusions = []
                db.findMany(Inclusions,{Category: productCategory}, "Category Name Price", function(result){
                    var data = result;
                    data.forEach((i)=>{
                        inclusions.push({Category: i.Category, Name: i.Name, Price: i.Price})
                    })
                    console.log(inclusions)
                    res.status(201).send(inclusions) 
                }) 
            })       
        })   
    },

    getOrderSummary: function(req, res){
        var projection = "Product Inclusions AmountDue"
        var Order
        db.findOne(Appointments, {refNum: refnum}, projection, function(result){
            Order = {
                Product: result.Product,
                Inclusions: result.Inclusions,
                AmountDue: result.AmountDue
            }
        })
        res.send(Order)
    },

    getAppointments: function(req,res){
        var projection = "ClientName ClientInfo Product Inclusions AmountDue"
        var appointment
        db.findOne(Appointments, {refNum: refnum}, projection, function(result){
            appointment = {
                ClientName: result.ClientName,
                ClientInfo: result.ClientInfo,
                Product: result.Product,
                Inclusions: result.Inclusions,
                AmountDue: result.AmountDue
            }
        })
        res.send (appointment)
    },
    login: function(req,res){
		db.findOne(Password, {Password: req.Password}, function(result){
			console.log(result);
			if (result.Password == req.Password)
				res.send(200);
			else
				res.send(104);
		});
	},
    getAllAppointments: function(req,res){
        var projection = "ClientName ClientInfo refNum PaymentStatus Product Inclusions AmountDue"
        var appointment
        db.findMany(Appointments,{}, projection, function(result){
            appointment = {
                ClientName: result.ClientName,
                ClientInfo: result.ClientInfo,
                Product: result.Product,
                Inclusions: result.Inclusions,
                AmountDue: result.AmountDue
            }
        })
        res.send (appointment)
    },
}

module.exports = controller;

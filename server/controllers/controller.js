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
        var appointment = {
            ClientName: req.body.name,
            ClientEmail: req.body.email,
            ClientContact: req.body.contact,
            Service: req.body.service,
            Inclusions: req.body.inclusions,
            AmountDue: req.body.AmountDue,
            Schedule: req.body.schedule
        }
        db.insertOne(Appointments,appointment, function(){
            console.log("Appointment Added")
        })
        res.status(201).send();
    },

    getInclusionsPage: function(req,res){
        var category = req.params.category
        var inclusions = []
        db.findMany(Inclusions,{Category: category}, "Category Name Price", function(result){
            var data = result;
            data.forEach((i)=>{
                inclusions.push({Category: i.Category, Name: i.Name, Price: i.Price})
                })
            console.log(inclusions)
            res.status(201).send(inclusions) 
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

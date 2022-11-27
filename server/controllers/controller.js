const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");
const Inclusions = require("../database/models/Inclusions");

let refnum = '0';

const controller = {

    /*
        Returns the list of services. Has the option to select only services from a specific category
        through the `category` query.
    */
    getServices: async function (req, res) {
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
        console.log(refnum)
        db.insertOne(Appointments, {Product: product, refNum: refnum, AmountDue: AmountDue},function(){     
        });
        res.status(201).send();
    },

    addInclusions: function(req,res){
        var Inclusions = req.body.Inclusions //UID of Inclusion
        var InclusionCost = 0
        Inclusions.forEach((i)=>{
            db.findOne (Inclusions, {UID: i.UID}, "Price", function(result){
                InclusionCost = InclusionCost + result
            })
        })
        db.updateOne(Appointments, {refNum: refnum}, {Inclusions: Inclusions, AmountDue: AmountDue+InclusionCost}, function(){
        })
        res.status(201).send();
    },

    addClientDetails: function(req,res){
        /* query client details */
        /* create object of details fit for db */
        db.updateOne(Appointments, refnum , /*object: object, */ function(){
        });
    },

    getInclusionsPage: function(req,res){
        productName = req.params.UID;
        console.log(productName);
        var inclusions = []
        db.findMany(Inclusions,{}, "Name mainProduct Description Price", function(result){
            var data = result;
            data.forEach((i)=>{
                if (i.mainProduct.includes(productName)){
                    inclusions.push({Name: i.Name, Description: i.Description, Price: i.Price})
                }
            })
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
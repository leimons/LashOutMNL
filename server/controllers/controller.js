const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");
const Inclusions = require("../database/models/Inclusions");
const Beauticians = require("../database/models/Beauticians");
const Password = require("../database/models/Password");
const dv = require("dayjs/locale/dv");

var fs = require ('fs');
var path = require ('path');
const app = require("../routes/routes");

let refnumber = '0';

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
        
        db.findMany(Appointments, {}, 'refNum', function(result){
            var Added
            var present = []
            var random
            var data = result
            data.forEach((i)=>{
                present.push(i.refNum)
            })
            var Done = false
            while (!Done){
                random = Math.floor(Math.random() * (9999 - 1000) + 1000)
                if (!present.includes(random)){
                    console.log(random)
                    Done = true
                }
            }
            refnumber = random
            var appointment = {
                refNum: random,
                ClientName: req.body.name,
                ClientEmail: req.body.email,
                ClientContact: req.body.contact,
                Service: req.body.service,
                Inclusions: req.body.inclusions,
                AmountDue: req.body.AmountDue,
                Beautician: req.body.beautician,
                Schedule: req.body.schedule,
                PaymentProof: {
                    data: '',
                    contentType: 'image/png'
                }
            }
            db.insertOne(Appointments,appointment, (err) =>{
                console.log("appointment Added")
                Added = true
                res.status(200).send(Added);
            })
        })     
    },

    uploadPayment: function (req,res){
        var Added
        console.log("doing this")
        console.log("refnumber is" + refnumber)
        var data= fs.readFileSync(path.join("./client/public/paymentImages/" + req.file.filename))
        console.log("refNumber is: " + refnumber)
        PaymentProof = {
            data: data,
            contentType: 'image/png'
        }
    
        db.updateOne(Appointments, {refNum: refnumber}, {PaymentProof: PaymentProof}, (err) =>{
            console.log('updated'+ refnumber)
            Added = true
            res.status(201).send(Added);
        })
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

    getBeautician: function(req,res){
        var Service = req.params.Service
        var Beautician = []
        db.findMany(Beauticians,{},"Name Services", function(result){
            var data = result
            data.forEach((i)=>{
                if (i.Services.includes(Service)){
                    Beautician.push(i.Name)
                }
            })
            res.status(201).send(Beautician)
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
        })
    },
        
   login: function(req,res){
		var projection = "Password"
		var key = req.body.pass;
		var resultpass
		resultpass = db.findOne(Password, {Password: key}, projection, function(result){
			if (result != null) {
				resultpass = result.Password;
				if (resultpass === key){
					console.log("equal");
					res.sendStatus(201);
				}
			}
			else res.sendStatus(403);
		});
	},
    getAllAppointments: function(req,res){
        var projection = "refNum ClientName ClientEmail ClientContact Service Inclusions AmountDue Beautician Schedule PaymentProof"
        var appointment = []
        db.findMany(Appointments,{}, projection, function(result){ 
            data = result
            data.forEach((i)=>{
                appointment.push({refNum: i.refNum , ClientName: i.ClientName, ClientEmail: i.ClientEmail,
                Service: i.Service, Inclusions: i.Inclusions, AmountDue: i.AmountDue, Schedule: i.Schedule, PaymentProof: i.PaymentProof})
            })
            console.log(appointment)
            res.status(201).send(appointment)
        })

        
    },
}

module.exports = controller;

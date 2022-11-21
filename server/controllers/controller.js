const db = require("../database/models/db");
const Products = require("../database/models/Products");
const Appointments = require("../database/models/Appointments");

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
        /*query the array of inclusions */
        db.updateOne(Appointments, refnum, /*inclusion: inclusions,*/function(){ 
        });

    },

    addClientDetails: function(req,res){
        /* query client details */
        /* create object of details fit for db */
        db.updateOne(Appointments, refnum , /*object: object, */ function(){
        });
    },

    getInclusionsPage: function(req,res){
        productName = req.params.id;
        console.log(productName);
        //res.render('inclusions');
    }
}

module.exports = controller;
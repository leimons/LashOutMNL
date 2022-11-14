const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

const Products = require("../database/models/Products");
const db = require("../database/models/db");

/*
    URL Path: `/api/categories`
    Returns list of categories as JSON
*/
app.get(`/categories`, (req, res) => {
    const categories = [
        {
            name: "Lashes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            priceDescription: "starts at ₱550.00"
        },
        {
            name: "Lashes Retouch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            priceDescription: "starts at ₱500.00"
        },
        {
            name: "Nails",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            priceDescription: "starts at ₱150.00"
        },
        {
            name: "Brows",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            priceDescription: "starts at ₱4,000.00"
        },
        {
            name: "Brows Retouch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            priceDescription: "starts at ₱1,500.00"
        }
    ]

    res.setHeader('Content-Type', 'application/json');
    res.json(categories);
})

app.get(`/services`, async (req, res) => {
    const projection = "-_id Name Category Description Duration Price"; // "-_id" excludes id field from data
    const services = db.findMany(Products, {}, projection, function(result) {
        res.send(result);
    });
})

module.exports = app;
const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

/*
    URL Path: `/api/services`
    Returns list of categories as JSON
*/
app.get(`/services`, (req, res) => {
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

module.exports = app;
const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    Name: String,
    Category: String,
    Description: String,
    Duration: String,
    Price: Number
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Price: Number
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
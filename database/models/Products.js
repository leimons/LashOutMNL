const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    Name: String,
    Category,
    Description: String,
    Price: Number
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
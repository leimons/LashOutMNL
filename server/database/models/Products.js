const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    Name: String,
    Category: String,
    Subcategory: String,
    Description: String,
    Duration: String,
    Price: Number,
    OnSale: Boolean,
    SalePrice: Number
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
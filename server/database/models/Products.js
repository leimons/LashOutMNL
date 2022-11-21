const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    Service: String,
    Category: String,
    Subcategory: String,
    Duration: String,
    Price: Number,
    Description: String,
    OnSale: Boolean,
    SalePrice: Number
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
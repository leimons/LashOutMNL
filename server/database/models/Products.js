const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    Category: String,
    services :[{
        Service: String,
        Subcategory: String,
        Duration: String,
        Price: Number,
        Description: String,
        OnSale: Boolean,
        SalePrice: Number}]
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
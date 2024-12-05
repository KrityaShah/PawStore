const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        require: true,
    },
    description : {
        type: String,
        require : true,
    },
    price: {
        type: String,
        require: true,
    }
})


const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
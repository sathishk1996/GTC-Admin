const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    number_of_products: {
        type: Number,
        required: true,
        default:0
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true,
        ref: 'address'
    }
})

const cart = mongoose.model('cart',CartSchema);
module.exports =cart;

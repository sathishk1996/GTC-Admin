const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique:true
    },
    user_id: {
        type: String,
        required:true,
        unique:true ,
        ref: 'address'
    },
    paid_amt:{
        type:Number,
        default:0
    },
    transaction_number:{
        type:Number,
        unique:true,
        required:true
    }
})

const payment = mongoose.model('payment',PaymentSchema);
module.exports = payment;

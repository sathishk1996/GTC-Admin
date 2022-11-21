const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_number: {
        type: Number,
        required: true,
        unique:true
    },
    user_id: {
        type: String,
        required:true,
        unique:true,
        ref:'address'
    },
    number_of_products: {
         type: Number,
         default:0
    },
    status:{
        type: String,
    },
    total:{
       type:Number,
       required:true
    },
    shipping_id:{
        type:String,
        unique:true,
        required:true
    }
})

const order = mongoose.model('order',OrderSchema);
module.exports = order;

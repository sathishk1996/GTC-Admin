const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    vendor_id :{
          type: Number,
          unique: true,
          required: true
    },
    quantity_avaliable :{
         type: Number,
         required: true,
         default:0
    },
    description :{
          type: String, 
          trim: true         
    },
    category_id :{
        type: Number,
        unique: true,
        required: true 
    },
    subcategory_id :{
         type: Number,
         unique: true,
         required: true
    },
    price :{
       type: Number,
       required: true,
       default:0         
    },
    status:{
        type: String,
        required: true 
    }
})

const product = mongoose.model('product',ProductSchema);
module.exports = product;

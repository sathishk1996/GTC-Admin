const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        unique:true,
        ref:"product" 
    },
    rating: {
        type: Number,
        value: Number
    },
    title: {
         type: String,
         trim: true
    },
    description:{
        type: String,
    }
})

const review = mongoose.model('review',ReviewSchema);
module.exports = review;

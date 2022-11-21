const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        trim: true,
        unique:true
    },
    pincode: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    nearby: {
          type: String
        },
    street:{
        type: String,
        required: true,
        trim: true 
    },
    country_id:{
        type: String
    },
    door_no:{
          type: Number,
          unique:true,
          trim:true
    },
    state_id:{
        type: String
    }
})

const address = mongoose.model('address',AddressSchema);
module.exports = address;

const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
          type: String,
          required: true,
          trim: true,
          unique: true,
          lowercase: true
    },
    password: {
          type: String,
          required: true,
          trim: true,
          minlength: 8
    },
    company_name: {
          type: String,
          required: true,
          trim: true,
    },
    plan_id: {
          type: Number,
          required: true,
    },
    verified_vendor:{
          type: Boolean 
    },
     status:{
          enum:['Active', 'InActive']
    }
}) 

const vendor = mongoose.model('vendor',VendorSchema);
module.exports = vendor;

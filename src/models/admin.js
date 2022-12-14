const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
    status:{
        type: String,
        required: true 
    }
})

const admin = mongoose.model('admin',AdminSchema);
module.exports = admin;
 
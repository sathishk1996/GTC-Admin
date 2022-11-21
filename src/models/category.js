const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    }
})

const category = mongoose.model('category',CategorySchema);
module.exports =category;

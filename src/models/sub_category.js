const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true,
        ref: 'category'
    },
    name: {
        type: String,
        required: true,
        trim: true 
    }
})

const subcategory = mongoose.model('sub_category',SubcategorySchema);
module.exports = subcategory;

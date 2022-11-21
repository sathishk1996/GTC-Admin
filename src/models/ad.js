const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    description:{
        type: String, 
    },
    target_url:{
         type:String,
         required: true,
         unique:true
    }

})

const ad = mongoose.model('ad',AdSchema);
module.exports = ad;

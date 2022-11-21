const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true,
        ref: 'country'
    },
    name: {
        type: String,
        required: true,
        trim: true 
    }
})

const state = mongoose.model('state',StateSchema);
module.exports = state;

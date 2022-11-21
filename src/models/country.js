const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
})

const country = mongoose.model('country',CountrySchema);
module.exports = country;

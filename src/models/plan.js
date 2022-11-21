const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cost_per_month: {
        type: Number,
        required:true 
    },
    product_limit: {
         type: Number,
         default:0
    },
    status:{
        type: String,
    }
})

const plan = mongoose.model('plan',PlanSchema);
module.exports = plan;

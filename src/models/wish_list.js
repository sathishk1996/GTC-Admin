const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        trim: true,
        unique:true,
        url: 'address'
    },
     number_of_products: {
        type: Number,
        required: true,
        default:0
    }
})

const wishlist = mongoose.model('wishlist',WishlistSchema);
module.exports = wishlist;

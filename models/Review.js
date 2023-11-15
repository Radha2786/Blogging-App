const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    rating: {
        type:Number,
        min:0,
        max:5,
        required:true
    },
    comment: {
        type:String,
        trim:true
    } 
},
{timestamps:true})
let Review = mongoose.model('Review' , reviewSchema);
module.exports = Review;

// we have added time stamp class to add the date and tym. it will return created time and updated tym.
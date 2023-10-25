const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        trim:true,
        required:true
    } , 
    img:{
        type:String,
        trim:true
    } ,
    Author: {
        type:String,
        trim:true
    },
    desc: {
        type:String,
        trim:true
    }
})
let Blog = mongoose.model('Blog' , blogSchema);
module.exports = Blog;
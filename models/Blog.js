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
    author: {
        type:String,
        trim:true
    },
    desc: {
        type:String,
        trim:true
    },
    reviews:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
        }
    ]
})
let Blog = mongoose.model('Blog' , blogSchema);
module.exports = Blog;
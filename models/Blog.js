const mongoose = require('mongoose');
const Review = require('../models/Review');
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

// middleware jo bts mongodb operations karvane par use hota hai and 
// iske andar pre and post middleware hote hai which are used over Schema and before model

blogSchema.post('findOneAndDelete', async function(blog){
    if(blog.reviews.length > 0){
        await Review.deleteMany({_id:{$in:blog.reviews}})
    }
})
let Blog = mongoose.model('Blog' , blogSchema);
module.exports = Blog;
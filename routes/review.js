const express = require('express');
const router = express.Router() //mini instance
const Blog = require('../models/Blog');
const Review = require('../models/Review');

router.post('/blogs/:id/review', async(req,res)=>{
const {id}= req.params;
const blog=await Blog.findById(id);
const {rating,comment} = req.body;
const review=new Review({rating,comment});
blog.reviews.push(review);
await review.save();
await blog.save();
res.redirect(`/blogs/${id}`);

})




module.exports = router;
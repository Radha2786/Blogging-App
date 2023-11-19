const express = require('express');
const router = express.Router() //mini instance
const Blog = require('../models/Blog');
const Review = require('../models/Review');
const {validatereview} = require('../middleware');

router.post('/blogs/:id/review', validatereview,async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        const { rating, comment } = req.body;
        const review = new Review({ rating, comment });
        blog.reviews.push(review);
        await review.save();
        await blog.save();
        req.flash('success', 'review added successfully')
        res.redirect(`/blogs/${id}`);
    }
    catch (e) {
        console.log('inside error of catch review');
        // res.status(500).render('error', { err: e.message })
    }

})

// router.delete('/reviews/:id',async(req,res)=>{
//     let {id} = req.params;
//     console.log(id);
//     const blog =await Blog.findById(id);
//     console.log(blog);
//     Review.deleteMany({_id:{$in:blog.reviews}})
//     await Review.findByIdAndDelete(id);
//     res.redirect(`/blogs/${id}`);
// })

router.delete('/reviews/:blogid/:reviewId', async (req, res) => {
    console.log('inside review route');
    let { blogid, reviewid } = req.params;
    const blog = await Blog.findById(blogid);
    console.log(blog);
    const review = await Review.findById(reviewid);
    console.log(review);
    console.log('printing reviewid', reviewid);
    const deletedReview = await Review.findByIdAndDelete(reviewid);
    console.log(deletedReview);
    res.redirect(`/blogs/${blogid}`);
})




module.exports = router;
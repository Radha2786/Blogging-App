const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router() //mini instance


router.get('/blogs' , async(req,res)=>{
    let items = await Blog.find({});
    res.render('blogs/index' , {items});
})

// to show form for the new blogs
router.get('/blogs/new',(req,res)=>{
    res.render('blogs/new');
})

// to actually add the product
router.post('/blogs' , async(req,res)=>{
    console.log('working on post request');
    console.log(req.body);
    let {title , img , author , desc} = req.body;
    await Blog.create({title , img , author , desc})
    res.redirect('/blogs');
})

// to show a particular product
router.get('/blogs/:id', async(req,res)=>{
    // console.log('inside show route');
    const {id}= req.params;
    // console.log(id);
    let foundblog = await Blog.findById(id).populate('reviews');
    res.render('blogs/show',{foundblog});
})

// form to edit a product
router.get('/blogs/:id/edit', async(req,res)=>{
    const {id} = req.params;
    let foundblog = await Blog.findById(id);
    res.render('blogs/edit',{foundblog});
})

// to actually edit the data in db
router.patch('/blogs/:id',async(req,res)=>{
    let {id}= req.params;
    let {title,img,author,desc} = req.body;
    await Blog.findByIdAndUpdate(id,{title,img,author,desc})
    res.redirect(`/blogs/${id}`);
})

//  to delete the data from db

router.delete('/blogs/:id',async(req,res)=>{
    let {id} = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');
})


module.exports = router;
const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router() //mini instance
const Joi = require('joi');
const {validateblog} = require('../middleware')


router.get('/blogs' , async(req,res)=>{
    try{
        let items = await Blog.find({});
        res.render('blogs/index' , {items});
    }catch(e){
        res.status(500).render('error',{err:e.message})
    }
  
})

// to show form for the new blogs
router.get('/blogs/new',(req,res)=>{
    try{
        res.render('blogs/new');
    }catch{
        res.status(500).render('error',{err:e.message})
    }
   
})

// to actually add the product
router.post('/blogs' , validateblog, async(req,res)=>{
    try{
        console.log('working on post request');
        // console.log(req.body);
        let {title , img , author , desc} = req.body;
        await Blog.create({title , img , author , desc})
        res.redirect('/blogs');
    }catch(e){
        res.status(500).render('error',{err:e.message})
    }
   
})

// to show a particular product
router.get('/blogs/:id', async(req,res)=>{
    try{
         // console.log('inside show route');
    const {id}= req.params;
    // console.log(id);
    let foundblog = await Blog.findById(id).populate('reviews');
    res.render('blogs/show',{foundblog});
    }catch(e){
        res.status(500).render('error',{err:e.message})
    }
   
})

// form to edit a product
router.get('/blogs/:id/edit', async(req,res)=>{
    try{
        const {id} = req.params;
        let foundblog = await Blog.findById(id);
        res.render('blogs/edit',{foundblog});
    }catch(e){
        res.status(500).render('error',{err:e.message})
    }
   
})

// to actually edit the data in db
router.patch('/blogs/:id',validateblog, async(req,res)=>{
    try{
        let {id}= req.params;
        let {title,img,author,desc} = req.body;
        await Blog.findByIdAndUpdate(id,{title,img,author,desc})
        res.redirect(`/blogs/${id}`);
    }catch(e){
        res.status(500).render('error',{err:e.message})
    }
  
})

//  to delete the data from db

router.delete('/blogs/:id',async(req,res)=>{
    try{
        let {id} = req.params;
        const blog=await Blog.findById(id);
        await Blog.findByIdAndDelete(id);
        res.redirect('/blogs');
    }catch{
        res.status(500).render('error',{err:e.message}) 
    }
   
})


module.exports = router;
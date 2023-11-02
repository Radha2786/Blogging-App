const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router() //mini instance


router.get('/blogs' , async(req,res)=>{
    let items = await Blog.find({});
    res.render('blogs/index' , {items});
})


module.exports = router;
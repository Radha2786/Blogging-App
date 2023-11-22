const express = require('express');
const router = express.Router() //mini instance
const User = require('../models/User');
const { use } = require('passport');

// to show the form for signup
router.get('/register',(req,res)=>{
    res.render('auth/signup');
})

// to actually register a user in db
router.post('/register', async(req,res)=>{
    console.log('inside register route');
    let {username,email,password}= req.body;
    // creating a new User
   const user =  new User({email,username});
   const newUser = await User.register(user,password);
   res.send(newUser);
   
})








module.exports = router;
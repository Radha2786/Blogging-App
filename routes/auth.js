const express = require('express');
const router = express.Router() //mini instance
const User = require('../models/User');
const passport = require('passport');

// to show the form for signup
router.get('/register',(req,res)=>{
    res.render('auth/signup');
})

// to actually register a user in db
router.post('/register', async(req,res)=>{
    // console.log('inside register route');
    let {username,email,password}= req.body;
    // creating a new User
   const user =  new User({email,username});
   const newUser = await User.register(user,password);
//    res.send(newUser);
// This function is primarily used when users sign up, during which req.login() can be invoked to automatically log in the newly registered user.
req.login(user, function(err) {
    if (err) { return next(err); }
    req.flash('success',`welcome ${req.user.username}, you are registered succesfully`);
    return res.redirect('/blogs');
  });
   
})

// to show the login form 
router.get('/login', (req,res)=>{
    res.render('auth/login');
})

// to actually login via db
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureMessage:true
}),
(req,res)=>{
    console.log('insnide router.post');
    // console.log(req.user);
    req.flash('success',`welcome ${req.user.username}, you are registered succesfully`);
    res.redirect('/blogs');

})

// req.logout always works inside a callback function
router.get('/logout', (req,res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success' , 'Thanks for visiting!')
        console.log('inside logout route')
        res.redirect('/login');
      });









module.exports = router;
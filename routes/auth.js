const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const nodemailer = require('nodemailer');
const emailConfig = require('../config');
const uuid = require('uuid');
const resetTokens = {};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailConfig.email,
      pass: 'gpcw aqhm bvkg bpku',
    },
  });

const router = express.Router() //mini instance
const passport = require('passport');



// to show the form for signup
router.get('/register', (req, res) => {
    res.render('auth/signup');
})

// to actually register a user in db
router.post('/register', async (req, res) => {
    // console.log('inside register route');
    let { username, email, password } = req.body;
    // creating a new User
    const user = new User({ email, username });
    const newUser = await User.register(user, password);
    //    res.send(newUser);
    // This function is primarily used when users sign up, during which req.login() can be invoked to automatically log in the newly registered user.
    req.login(user, function (err) {
        if (err) { return next(err); }
        req.flash('success', `welcome ${req.user.username}, you are registered succesfully`);
        return res.redirect('/blogs');
    });

})

// to show the login form 
router.get('/login', (req, res) => {
    res.render('auth/login');
})

// to actually login via db
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureMessage: true
}),
    (req, res) => {
        // console.log('insnide router.post');
        // console.log(req.user);
        req.flash('success', `welcome ${req.user.username}, you are logged In succesfully`);
        res.redirect('/blogs');

    })

// req.logout always works inside a callback function
router.get('/logout', (req, res) => {
    () => {
        req.logout();
    }
    req.flash('success', 'Thanks for visiting!')
    console.log('inside logout route')
    res.redirect('/login');
});
// -------------------------------------------------------------------

router.get('/forgot-password', (req, res) => {
    res.render('password/mailform');
})


router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const token = uuid.v4().substring(0,8);

    // resetTokens[email] = token;
    resetTokens[email] = {
        token: token,
        expiresAt: Date.now() + 60000, // Set expiration time to one minute (60,000 milliseconds)
      };

    const mailOptions = {
        from: emailConfig.email,
        to: email,
        subject: 'Password Reset',
        text: `Use this token to reset your password: ${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email');
        }

        console.log('Email sent: ' + info.response);
        res.render('password/getpassword');
        // res.send('Check your email for instructions on resetting your password.');
    });
});


router.post('/reset-password', async (req,res)=>{
    try{
    const { email, token, newpassword } = req.body;
    if (!resetTokens[email] || resetTokens[email].token !== token || resetTokens[email].expiresAt < Date.now()) {
        return res.status(400).send('Invalid or expired token');
      }
      console.log('Email:', email);
      console.log('New Password:', newpassword);
   
        // Find the user by username
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error('User not found');
    }

    // Use the changePassword method provided by passport-local-mongoose
    // await user.changePassword(newpassword);
    await user.setPassword(newpassword);

    // Save the user with the updated password
    await user.save();

    console.log('Password updated successfully');
    // console.log(newpassword);
    res.redirect('/blogs');
      
}catch(error){
        console.error('Error updating password:', error);
        return res.status(500).send('Internal Server Error');
      }
    //   return res.redirect('/blogs');
})


module.exports = router;
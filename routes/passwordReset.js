const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const resetTokens = {};
const router = express.Router() //mini instance
const User = require('../models/User');
const passport = require('passport');

router.get('/forgot-password',(req,res)=>{
    res.send('inside forgot password page');
    res.render('password/mailform');
    
})

router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const token = uuid.v4();
  
    resetTokens[email] = token;
  
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
      res.send('Check your email for instructions on resetting your password.');
    });
  });



















module.exports = router;
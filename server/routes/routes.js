const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/SignupModels');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {

  const { firstName, lastName, email, password, confirmPassword } = req.body;
    //check for duplicate emails in database
    const existingUser = await signupTemplateCopy.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({
          msg: `Email address already in use. <a href="/login">Login</a>`,
        });
      }
    const saltPassword = await bcrypt.genSaltSync(13);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);


    const signedUpUser = new signupTemplateCopy({
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:securePassword,
        confirmPassword:securePassword
      
})

signedUpUser.save()
.then(data => {
    res.json(data)
})
.catch(error => {
    res.json(error)
})
})

module.exports = router
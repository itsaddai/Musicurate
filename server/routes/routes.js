const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/SignupModels');

router.post('/signup', (req, res) => {
    const signedUpUser = new signupTemplateCopy({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
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
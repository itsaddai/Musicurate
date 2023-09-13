const express = require('express');
const router = express.Router();
const { Login, register } = require("../Controllers/AuthController");
const signupTemplateCopy = require('../models/SignupModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
//import user
const User = require('../models/SignupModels');
const { userVerification } = require('../Middlewares/AuthMiddleware');


//create jwt authentication
//user verification post
router.post('/', userVerification)

//login post
router.post('/login', Login);
//register post

router.post("/register", register);


module.exports = router
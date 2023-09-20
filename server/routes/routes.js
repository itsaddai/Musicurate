const express = require('express');
const router = express.Router();
const {register, Login} = require('../Controllers/AuthController')
const { userVerification } = require('../Middlewares/AuthMiddleware');


//create jwt authentication
//user verification post
router.post('/', userVerification)
//login post
router.post('/login', Login);
//register post
router.post("/register", register);



module.exports = router
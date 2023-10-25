const express = require('express');
const router = express.Router();
const {register, Login, savePassword} = require('../Controllers/AuthController')
const { userVerification } = require('../Controllers/Middlewares/AuthMiddleware');


//create jwt authentication
//user verification post
router.post('/', userVerification)
//login post
router.post('/login', Login);
//register post
router.post("/register", register);
//save password post
//router.post("/save-password", savePassword);



module.exports = router
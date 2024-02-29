const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')


// Routes for user registration and login
router.post('/register', userController.postUserRegistration);
    
router.post('/login', userController.postUserLogin);


module.exports = router
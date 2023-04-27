const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel')
const UserController = require('../controllers/useController')
const bookController = require('../controllers/bookController')


router.post('/createUser', UserController.createUser)

router.get('/getUsersData', UserController.getUsersData)

router.post('/createBook', bookController.createBook)
router.get('/getBook', bookController.getBookData)



module.exports = router;
const express = require('express')

// controller functions
const { loginUser, signupUser, getUsers, getUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.get('/users', getUsers);

router.get('/users/:id', getUser);


module.exports = router
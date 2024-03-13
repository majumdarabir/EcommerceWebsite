const express = require('express')
const createUser = require('../Controllers/authController')
const router = express.Router()

router.post('/register',createUser)

module.exports = router
const express = require('express')
const {createUser,loginUser, getAllUsers, getUserById, deleteUserById,isAdmin,updateUser} = require('../Controllers/authController')
const { authMiddleware } = require('../Middlewares/authMiddleware')
const router = express.Router()

router.post('/register',createUser)
router.post('/login',loginUser)
router.get('/isAdmin',authMiddleware,isAdmin)
router.get('/getAllUsers',getAllUsers)
router.get('/getUserById/:id',getUserById)
router.get('/deleteUserById/:id',deleteUserById)
router.put('/updateuser',authMiddleware, updateUser)
module.exports = router
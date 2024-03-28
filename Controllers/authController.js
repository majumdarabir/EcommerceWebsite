const User = require('../Models/userModel')
const asyncHandler = require('express-async-handler')
const genarateToken = require('../config/jwtToken')
//creating user
const createUser = async (req, res) => {

    const existingUsers = await User.find();
    if(existingUsers.length ===0){
        const newUser = User.create({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            role:'admin'
        })
        res.status(200).json("user created")
    }
    else{
        const email = req.body.email
        const existUser = await User.findOne({ email })
        if (!existUser) {
            const newUser = User.create(req.body);
            res.status(200).json("user created")

        } else {
            res.status(500).json({'error':"user already exist"})
        }
    }
    
}

//login user
const loginUser =asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const existUser = await User.findOne({email})
    if (existUser && await existUser.isPasswordMatched(password)){
        res.json({
            _id:existUser?._id,
            username:existUser?.username,
            email:existUser?.email,
            token : genarateToken(existUser?._id)
        })
    }
    else{
        res.status(500).json({'error':"credential mismatch!"})
    }
})

//get all users
const getAllUsers =asyncHandler(async(req,res)=>{
    const users = await User.find()
    if(users){
        res.json(users)
    }
    else{
        res.json("no users found")
    }

})

const getUserById =asyncHandler(async(req,res)=>{
    const {id} = req.params 
    const user = await User.findById(id)
    if(user){
        res.json({user})
    }
    else{
        res.status(400).json("no user found")
    }
})

const deleteUserById = asyncHandler(async(req,res)=>{
    const {id}= req.params
    const deletedUser = await User.findByIdAndDelete(id)
    if(deletedUser){
        res.json(deletedUser)
    }
    else{
        res.status(400).json("user not found")
    }
})
const isAdmin=(req,res)=>{
    if (req.user && req.user.role === 'admin') {
        res.status(201).json("Admin")
    } else {
        res.status(500).json("not Admin")
    }
}

const updateUser=asyncHandler(async(req,res)=>{
    const { email } = req.body;

    try {
        // Find the user by email
        const newuser = await User.findOne({ email });

        if (!newuser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user role to admin
        newuser.role = 'admin';
        await newuser.save();

        return res.status(200).json({ message: 'User role updated to admin successfully' });
    } catch (error) {
        console.error('Error updating user role:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
})




module.exports = {createUser,loginUser,getAllUsers,getUserById,deleteUserById,isAdmin,updateUser}
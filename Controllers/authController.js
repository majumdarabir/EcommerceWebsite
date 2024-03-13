const User = require('../Models/userModel')

const createUser = async (req, res) => {
    const email = req.body.email
    const existUser = await User.findOne({email})
    if (!existUser) {
        //create new user
        const newUser = User.create(req.body);
        res.status(400).json("user created")

    } else {
        res.json("user already exist")
    }
    
}

// const loginUser =(req,res)=>{
//     const email = req.body.email
//     const existUser = User.findOne({email})
//     if(!existUser){
//         req.json("user does't exist")
//     }
//     else{

//     }
// }

module.exports = createUser
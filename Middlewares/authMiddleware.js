const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')
const dotenv = require('dotenv')

dotenv.config()
const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {

        return res.status(401).json({ error: "You must have logged in 1" })
    }
    const token = authorization.replace("Bearer", "")

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ error: "You must have logged in 2" })
        }
        console.log(payload)
        const { id } = payload
        User.findById(id).then(userData => {
            req.user = userData
            console.log(req.user)
            next()
        })
    })
}

const isAdmin = (req, res, next) => {
    
    if (req.user && req.user.role === 'admin') {
        console.log("i am admin")
        return next();
    } else {
        console.log("i am not admin")
    }
    return res.status(403).json({ message: 'Access Denied: Admin Only' });

};
module.exports = { authMiddleware, isAdmin }
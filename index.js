const express = require("express")
const dbConnect = require('./config/dbConfig')
const dotenv = require('dotenv')
const authRoute = require('./Routes/authRoute')

dotenv.config()
const app = express()
app.use(express.json())

dbConnect()

app.use('/api/user',authRoute)
app.use('/',(req,res)=>{
    console.log("...")
})

app.listen(4000,(req,res)=>{
    console.log("server is running 4000");
})
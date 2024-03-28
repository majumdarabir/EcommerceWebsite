const express = require('express')

const router = express.Router()

router.post('/payment',(req,res)=>{
    console.log("payment Api")
})

module.exports = router
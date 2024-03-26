const productModel = require('../Models/productModel')
const Product = require('../Models/productModel')

const getAllProducts =async(req,res)=>{
    const products = await Product.find().sort('-createdAt')
    if(products){
        res.json(products)
    }
    else{
        res.json("No products found!")
    }
}

const postProduct=async(req,res)=>{
    try{
       const {coursename,coursedesc,coursepic}= req.body
        const product = new Product({
            course_name:coursename,
            course_desc:coursedesc,
            course_pic:coursepic
        })
        await product.save()
        res.status(201).json('course created')

    }
    catch(error){
        res.status(500).json(error)
        console.log(error)
    }
    console.log(req.body)
}

module.exports = {getAllProducts,postProduct}
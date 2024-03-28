
const Product = require('../Models/productModel')
const Item = require('../Models/itemModel')

const getAllProducts =async(req,res)=>{
    const products = await Product.find().sort('-createdAt')
    if(products){
        res.json(products)
    }
    else{
        res.json("No products found!")
    }
}
const getAllItems=async(req,res)=>{
    const items = await Item.find().sort('-createdAt')
    if(items){
        res.status(201).json(items)
    }
    else{
        res.json("no items found")
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
const postItem =async(req,res)=>{
    try{
        const { itemname, itemdesc, git, link } = req.body
        const item = new Item({
            itemname: itemname,
            itemdesc: itemdesc,
            git: git,
            link: link

        })
        await item.save()
        res.status(201).json('course created')
    }
    catch(error){
        res.status(401).json(error)
    }
}

module.exports = {getAllProducts,postProduct,postItem,getAllItems}
const express = require('express')
const authMiddleware = require('../Middlewares/authMiddleware')
const {getAllProducts,postProduct} = require('../Controllers/productController')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.get('/all_products',getAllProducts)
router.post('/post_product',upload.single('pic'),postProduct)

module.exports = router
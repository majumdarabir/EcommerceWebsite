const express = require('express')
const { authMiddleware, isAdmin } = require('../Middlewares/authMiddleware')
const { getAllProducts, postProduct, postItem, getAllItems } = require('../Controllers/productController')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.get('/all_products', authMiddleware, getAllProducts)
router.get('/all_items', authMiddleware, getAllItems)
router.post('/post_product', authMiddleware, isAdmin, upload.single('pic'), postProduct)
router.post('/post_item', authMiddleware, isAdmin, postItem)

module.exports = router
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')
// data posting in database 

router.route('/').post( productController.SaveProduct)
.get(productController.getAllProduct)
 

module.exports = router;
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')
// data posting in database 

router.route('/').post( productController.SaveProduct)
.get(productController.getAllProduct)
router.route("/bulk-update").patch(productController.bulkProductUpdateController);
router.route('/:id').patch(productController.getUpdateProductById)
 

module.exports = router;
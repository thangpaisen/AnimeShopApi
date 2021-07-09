const express = require('express');
const router = express.Router()
const productController =require('../controllers/ProductController')



router.get('/', productController.show);  
router.get('/HotSales', productController.HotSales);

router.post('/', productController.create);   
router.get('/:id', productController.findProduct);   
router.delete('/:id', productController.delete);   
router.patch('/:id', productController.updateOne);   


module.exports = router;
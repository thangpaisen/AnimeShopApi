const express = require('express');
const router = express.Router()
const productController =require('../controllers/ProductController')



router.get('/HotSales', productController.HotSales);
router.get('/Category/:ProductType', productController.ProductType);
router.get('/Search/:name', productController.Search);


router.get('/:id', productController.findProduct);   

router.get('/', productController.show);  
router.post('/', productController.create);   
router.delete('/:id', productController.delete);   
router.patch('/:id', productController.updateOne);   


module.exports = router;
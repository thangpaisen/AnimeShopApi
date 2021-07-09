const express = require('express');
const router = express.Router()
const categoryController =require('../controllers/CategoryController')



router.get('/', categoryController.show);   

// router.get('/', categoryController.show);

// router.post('/', productController.create);   
// router.get('/:id', productController.findProduct);   
// router.delete('/:id', productController.delete);   
// router.patch('/:id', productController.updateOne);   


module.exports = router;
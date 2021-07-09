const Category = require("../models/Category");
class CategoryController {
  //GET /categories
  async show(req, res) {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (error) {
      res.json({ message: error });
    }
  }


  // //POST /products
  // async create(req, res) {
  //   const product = new Product({
  //     title: req.body.title,
  //     description: req.body.description,
  //     image: req.body.image,
  //     productType: req.body.productType,
  //     price: req.body.price,
  //     quantity: req.body.quantity,
  //     rate: req.body.rate,
  //     sale: req.body.sale,
  //     sold: req.body.sold,
  //     models: req.body.models,
  //   });
  //   try {
  //     const saveProduct = await product.save();
  //     res.json(saveProduct);
  //   } catch (error) {
  //     res.json({ message: error });
  //   }
  // }

  // //GET /products/:id
  // async findProduct(req, res) {
  //   try {
  //     const product = await Product.findOne({ _id: req.params.id });
  //     res.json(product);
  //   } catch (error) {
  //     res.json({ message: error });
  //   }
  // }
  // //DELETE /products/:id
  // async delete(req, res) {
  //   try {
  //     const removeProduct = await Product.remove({ _id: req.params.id });
  //     res.json(removeProduct);
  //   } catch (error) {
  //     res.json({ message: error });
  //   }
  // }

  // //DELETE /products/:id
  // async updateOne(req, res) {
  //   try {
  //     const updateProduct = await Product.updateOne(
  //       { _id: req.params.id },
  //       {
  //         $set: {
  //           title: req.body.title,
  //           // description: req.body.description,
  //           // image: req.body.image,
  //           // productType: req.body.productType,
  //           // price: req.body.price,
  //           // quantity: req.body.quantity,
  //           // rate: req.body.rate,
  //           // sale: req.body.sale,
  //           // sold: req.body.sold,
  //           // models: req.body.models,
  //         },
  //       }
  //     );
  //     res.json(updateProduct);
  //   } catch (error) {
  //     res.json({ message: error });
  //   }
  // }
}

module.exports = new CategoryController();

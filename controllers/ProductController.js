const Product = require("../models/Product");
const Category = require("../models/Category");
class ProductController {
  //GET /products
  async show(req, res) {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
  }

 

  //POST /products
  async create(req, res) {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      productType: req.body.productType,
      price: req.body.price,
      quantity: req.body.quantity,
      rate: req.body.rate,
      sale: req.body.sale,
      sold: req.body.sold,
      models: req.body.models,
    });
    try {
      const saveProduct = await product.save();
      res.json(saveProduct);
    } catch (error) {
      res.json({ message: error });
    }
  }

  //GET /products/:id
  async findProduct(req, res) {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      res.json(product);
    } catch (error) {
      res.json({ message: error });
    }
  }
  //DELETE /products/:id
  async delete(req, res) {
    try {
      const removeProduct = await Product.remove({ _id: req.params.id });
      res.json(removeProduct);
    } catch (error) {
      res.json({ message: error });
    }
  }

  //DELETE /products/:id
  async updateOne(req, res) {
    try {
      const updateProduct = await Product.updateOne(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            // description: req.body.description,
            // image: req.body.image,
            // productType: req.body.productType,
            // price: req.body.price,
            // quantity: req.body.quantity,
            // rate: req.body.rate,
            // sale: req.body.sale,
            // sold: req.body.sold,
            // models: req.body.models,
          },
        }
      );
      res.json(updateProduct);
    } catch (error) {
      res.json({ message: error });
    }
  }

   //GET /products/HotSales
  async HotSales(req, res) {
    try {
      const products = await Product.find({}).sort({sale: -1});
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
  }
   //GET /products/category/:ProductType
  async ProductType(req, res) {
    try {
      const products = await Product.find({productType: req.params.ProductType})
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
  }
  //GET /products/Search/:name
  async Search(req, res) {
    try {
      const products = await Product.find({title: {'$regex': req.params.name}})
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
  }
} 

module.exports = new ProductController();

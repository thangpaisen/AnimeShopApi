const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Product = new Schema({
  title:  { type: String },
  description: { type: String},
  image: { type: String},
  productType: { type: String},
  price: { type: Number },
  quantity: { type: Number},
  rate: { type: Number},
  sale: { type: Number},
  sold: { type: Number},
  models: { type: [String]},
  },
  {timestamps: true}
)

module.exports = mongoose.model('Product', Product);  
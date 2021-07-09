const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Category = new Schema({
  CategoryTitle:  { type: String },
  CategoryImage: { type: String},
  CategoryId:  { type: String ,required:true},
  },
  {timestamps: true}
)

module.exports = mongoose.model('Category', Category);  
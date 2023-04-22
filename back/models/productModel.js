const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema(
  {
    "_id": {
      type: String,
      required: true
    },
    "category": {
      type: String,
      required: true
    },
    "name": {
      type: String,
      required: true
    },
    "price": {
      type: Number,
      required: true
    },
    // "customization": {

    // },
    "description": {
      type: String,
      required: true
    },
    "img": {
      type: String,
      required: true
    },
    "time": {
      type: Date,
      required: true
    },
  }
);
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

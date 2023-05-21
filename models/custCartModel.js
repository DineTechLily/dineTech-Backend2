const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema(
  {
    "order_id": {
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
    "description": {
      type: String,
      required: true
    },
    "img": {
      type: String,
      required: true
    },
    "number": {
      type: Number,
      required: true
    },
    "cust_name1": {
      type: String
    },
    "cust_description1": {
      type: String
    },
    "cust_price1": {
      type: Number
    },
    "cust_name2": {
      type: String
    },
    "cust_description2": {
      type: String
    },
    "cust_price2": {
      type: Number
    },
    "cust_name3": {
      type: String
    },
    "cust_description3": {
      type: String
    },
    "cust_price3": {
      type: Number
    },
    "edit_id": {
      type: String,
    },
  }
);
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

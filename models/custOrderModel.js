const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema(
  {
    "order_id": {
      type: String,
      // required: true
    },
    "category": {
      type: String,
      // required: true
    },
    "name": {
      type: String,
      // required: true
    },
    "price": {
      type: Number,
      // required: true
    },
    "description": {
      type: String,
      // required: true
    },
    "img": {
      type: String,
      // required: true
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
  }
);
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

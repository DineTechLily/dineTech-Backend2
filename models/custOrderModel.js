const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema(
  {
    "_id": {
      type: String,
      required: true
    },
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
      // required: true
    },
    "number": {
      type: Number,
      required: true
    },
    "total_price": {
      type: Number,
      required: true
    },
    "cust_name1": {
      type: String
    },
    "cust_price1": {
      type: Number
    },
    "cust_name2": {
      type: String
    },
    "cust_price2": {
      type: Number
    },
    "cust_name3": {
      type: String
    },
    "cust_price3": {
      type: Number
    },
    "finished": {
      type: Boolean,
      default: false
    }
  }
);
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

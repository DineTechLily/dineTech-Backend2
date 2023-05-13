const mongoose = require('mongoose');
const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '請輸入名稱'],
  },
  category: {
    type: String,
    enum: ['risotto', 'pasta', 'dessert', 'drink','risottoMeal', 'pastaMeal','all'],
    required: [true, '請選擇分類'],
  },
  stock: {
    type: Number,
    required: [true, '請輸入庫存數量'],
    min: 0
  },
  expiration:{
    type: Date,
  },
  symbol:{
    type: String,
    enum: ['*', '-'],
    required: [true, '請選擇符號'],
  },
  discountValue:{
    type: Number,
    required: [true, '請輸入折扣數值'],
    min: 0
  },
  isRemoved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Discount = mongoose.model('discount', discountSchema);

module.exports = Discount;
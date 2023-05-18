const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  product:
  {
    type: mongoose.Schema.ObjectId,
    ref: 'product',
  },
  name: {
    type: String,
    required: [true, '請輸入名稱'],
  },
  stock: {
    type: Number,
    required: [true, '請輸入庫存數量'],
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

itemSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'product',
    model: 'product',
  });
  next();
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;
// 這裡現在用admin/product
// const mongoose = require('mongoose');
// const productSchema = new mongoose.Schema({
//   category: {
//     type: String,
//     enum: ['risotto', 'pasta', 'dessert', 'drink'],
//     required: [true, '請選擇分類'],
//   },
//   name: {
//     type: String,
//     required: [true, '請輸入名稱'],
//   },
//   cost: {
//     type: Number,
//     required: [true, '請輸入成本'],
//     min: 0
//   },
//   price: {
//     type: Number,
//     required: [true, '請輸入售價'],
//     min: 0
//   },
//   description: {
//     type: String,
//     required: [true, '請輸入介紹'],
//   },
//   img: {
//     type: String,
//     required: [true, '請輸入圖片URL'],
//   },
//   customization: [
//     {
//       type: mongoose.Schema.ObjectId,
//       ref: 'customization',
//     }
//   ],
//   isRemoved: {
//     type: Boolean,
//     default: false
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
// });

// productSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'customization',
//     model: 'customization'
//   });
//   next();
// });

// const Product = mongoose.model('product', productSchema);

// module.exports = Product;
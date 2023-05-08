const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "請輸入名稱"],
  },
  category: {
    type: String,
    enum: ['risotto', 'pasta'],
    required: [true, "請選擇主餐"],
  },
  main: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "item",
    }
  ],
  hasDessert: {
    type: Boolean,
    required: [true, "是否包含甜點"],
  },
  dessert: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "item",
    }
  ],
  hasDrink: {
    type: Boolean,
    required: [true, "是否包含飲料"],
  },
  drink: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "item",
    }
  ],
  isRemoved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

// mealSchema.pre(/^find/, function (next) {
//   this.populate(
//     {
//       path: 'item'
//     }
//   );
//   next();
// })

const Meal = mongoose.model('meal', mealSchema);

module.exports = Meal;
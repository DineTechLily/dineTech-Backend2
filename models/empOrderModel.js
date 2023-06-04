const mongoose = require('mongoose')
const eOrderSchema = new mongoose.Schema(
  {
    table: {
      type: Number,
      required: true
    },
    people: {
      type: Number,
      required: true
    },
    time: {
      type: String,
    },
    order_id: {
      type: String,
    },
    order_time: {
      type: String,
    },
    table_id: {
      type: Number
    },
    finished: {
      type: Boolean
    },
    payment: {
      type: Boolean,
      default: false
    }
  }
);
const EOrder = mongoose.model('EOrder', eOrderSchema);

module.exports = EOrder;

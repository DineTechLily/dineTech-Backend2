const mongoose = require('mongoose')
const guestSchema = new mongoose.Schema(
  {
    table: {
      type: Number,
      required: true
    },
    table_id: {
      type: String
    },
    order_id: {
      type: String
    },
    people: {
      type: Number,
      required: true
    },
    time: {
      type: Date,
      default: Date.now
    },
  }
);
const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;

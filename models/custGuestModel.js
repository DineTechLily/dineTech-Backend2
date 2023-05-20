const mongoose = require('mongoose')
const guestSchema = new mongoose.Schema(
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
      type: [ String ]
    },
    table_id: {
      type: Number
    },
  }
);
const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;

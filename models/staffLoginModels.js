const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema({
  componyId: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Account = mongoose.model("Account", accountSchema);

module.exports = Account;

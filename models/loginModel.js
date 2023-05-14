const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  account: {
    type: String,
    required: [true, "請輸入您的帳號"],
  },
  password: {
    type: String,
    required: [true, "請輸入您的密碼"],
  },
  permissions: {
    type: Array,
  },
  isEnable: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("accounts", userSchema);

module.exports = User;

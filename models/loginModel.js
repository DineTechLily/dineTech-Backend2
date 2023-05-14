const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  account: {
    type: String,
    required: [true, "請輸入您的帳號"],
  },
  password: {
    type: String,
    required: [true, "請輸入您的密碼"],
  },
});

const User = mongoose.model("accounts", userSchema);

module.exports = User;

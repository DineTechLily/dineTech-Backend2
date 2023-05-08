const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
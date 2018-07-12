const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  dishName: { type: String, required: true},
  menuSelection: { type: String, required: false },
  alias: { type: String, required: false },
  price: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;

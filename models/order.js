const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerId: { type: String, required: true },
  orderStatus: { type: String, required: true},
  dishName: { type: String, required: false },
  alias: { type: String, required: false },
  price:{ type: Number, required: false },
  menuSelection: { type: String, required: false },
  photo: { type: String, required: false },
  table: { type: Number, required: false },
  waiterId: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

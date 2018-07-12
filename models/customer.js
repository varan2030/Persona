const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  faceId: { type: String, required: true},
  name: { type: String, required: true },
  photo: { type: String, required: false },
  table: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

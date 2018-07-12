const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  tableNumber: { type: Number, required: true },
  tableAvailability: { type: String, required: true},
  customerId: { type: String, required: false },
  tableImg: { type: String, required: false},
  customerName: { type: String, required: false}, 
  date: { type: Date, default: Date.now }
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;

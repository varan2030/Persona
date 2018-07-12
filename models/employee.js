const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  faceId: { type: String, required: true},
  name: { type: String, required: true },
  photo: { type: String, required: false },
  role: {type: String, required: false},
  table: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

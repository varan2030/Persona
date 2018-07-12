const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Table collection and inserts the dishes below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/persona"
);

const tableSeed = [
  {
    tableNumber: 1,
    tableAvailability: "available",
    date: new Date(Date.now())
  },
  {
    tableNumber: 2,
    tableAvailability: "available",
    date: new Date(Date.now())
  },
  {
    tableNumber: 3,
     tableAvailability: "available",
    date: new Date(Date.now())
  },
  {
    tableNumber: 4,
     tableAvailability: "available",
    date: new Date(Date.now())
  },
  {
    tableNumber: 5,
     tableAvailability: "available",
    date: new Date(Date.now())
  },
  {
    tableNumber: 6,
     tableAvailability: "available",
    date: new Date(Date.now())
  }
];

db.Table
  .remove({})
  .then(() => db.Table.collection.insertMany(tableSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Menu collection and inserts the dishes below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/persona"
);

const menuSeed = [
  {
    dishNumber:"1",
    dishName: "Beer",
    alias: "beer",
    price: 5.99,
    menuSelection: "Beverage",
    date: new Date(Date.now())
  },
  {
    dishNumber:"2",
    dishName: "Wine",
    alias: "wine",
    price: 7.99,
    menuSelection: "Beverage",
    date: new Date(Date.now())
  },
  {
    dishNumber:"3",
    dishName: "Tea",
    alias: "tea",
    price: 4.99,
    menuSelection: "Beverage",
    date: new Date(Date.now())
  },
  {
    dishNumber:"4",
    dishName: "Calamari",
    alias: "cala",
    price: 8.49,
    menuSelection: "Appetizer",
    date: new Date(Date.now())
  },
  {
    dishNumber:"5",
    dishName: "Chicken Wings",
    alias: "wing",
    price: 10.99,
    menuSelection: "Appetizer",
    date: new Date(Date.now())
  },
  {
    dishNumber:"6",
    dishName: "Salad",
    alias: "sald",
    price: 9.99,
    menuSelection: "Appetizer",
    date: new Date(Date.now())
  },
  {
    dishNumber:"7",
    dishName: "Chicken",
    alias: "chkn",
    price: 12.49,
    menuSelection: "Protein",
    date: new Date(Date.now())
  },
  {
    dishNumber:"8",
    dishName: "Steak",
    alias: "beef",
    price: 15.99,
    menuSelection: "Protein",
    date: new Date(Date.now())
  },
  {
    dishNumber:"9",
    dishName: "Salmon",
    alias: "fish",
    price: 13.49,
    menuSelection: "Protein",
    date: new Date(Date.now())
  },
  {
    dishNumber:"10",
    dishName: "Pasta",
    alias: "past",
    price: 5.99,
    menuSelection: "Starch",
    date: new Date(Date.now())
  },
  {
    dishNumber:"11",
    dishName: "Potato",
    alias: "pota",
    price: 5.99,
    menuSelection: "Starch",
    date: new Date(Date.now())
  },
  {
    dishNumber:"12",
    dishName: "Rice",
    alias: "rice",
    price: 5.99,
    menuSelection: "Starch",
    date: new Date(Date.now())
  },
  {
    dishNumber:"13",
    dishName: "Carrots",
    alias: "carr",
    price: 4.99,
    menuSelection: "Vegetable",
    date: new Date(Date.now())
  },
  {
    dishNumber:"14",
    dishName: "Broccoli",
    alias: "broc",
    price: 4.99,
    menuSelection: "Vegetable",
    date: new Date(Date.now())
  },
  {
    dishNumber:"15",
    dishName: "Corn",
    alias: "sprt",
    price: 4.99,
    menuSelection: "Vegetable",
    date: new Date(Date.now())
  },
  {
    dishNumber:"16",
    dishName: "Choc Cake",
    alias: "cake",
    price: 6.99,
    menuSelection: "Dessert",
    date: new Date(Date.now())
  },
  {
    dishNumber:"17",
    dishName: "Ice Cream",
    alias: "icrm",
    price: 5.99,
    menuSelection: "Dessert",
    date: new Date(Date.now())
  },
  {
    dishNumber:"18",
    dishName: "Cheesecake",
    alias: "ccke",
    price: 7.99,
    menuSelection: "Dessert",
    date: new Date(Date.now())
  }
];

db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  

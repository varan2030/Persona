const db = require("../models");

// Defining methods for the ordersController
module.exports = {
  findAll: function(req, res) {
    db.Order
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findHistoricalData: function(req, res) {
    db.Order
      .aggregate([
        {$match:{customerId: req.params.id}},
        { $group: { 
          _id: {dish:"$dishName", menu: "$menuSelection" }, 
         count:{$sum:1}
         },
        },
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOrdersAndClose: function(req, res){
    db.Order
      .updateMany({customerId: req.params.id}, {orderStatus:"closed"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findCurrentOrders: function(req, res){
    db.Order
      .find({customerId: req.params.id, orderStatus:"open"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findTotalOrdersByDishes: function(req, res){
    db.Order
      .aggregate([
        { $match: { customerId: req.params.id, orderStatus:"open"} },
        {$group:{_id:"$dishName", total:{$sum: "$price"}}},
        { $sort: { total: -1 } }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findTotalOrders: function(req, res){
    db.Order
    .aggregate([
      { $match: { customerId: req.params.id, orderStatus:"open"} },
      {$group:{_id:"$customerId", total:{$sum: "$price"}}}
    ])
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  },

  create: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Order
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Order
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

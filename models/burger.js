var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(newBurger, cb) { 
    orm.insertOne("burgers", newBurger, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerID, cb) {
    orm.updateOne("burgers", burgerID, function(res) {
      cb(res);
    });
  }
}; 

module.exports = burger;
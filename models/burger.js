module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }, 
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
  return Burger;
};





/*var orm = require("../config/orm.js");

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

module.exports = burger;*/
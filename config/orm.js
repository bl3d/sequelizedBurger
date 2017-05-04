var connection = require("./connection.js");

// Object Relational Mapper for queries
var orm = {
  selectAll: function(table, cb) { 
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) { 
      if (err) throw err;
      cb(result);
    });
  } ,
  insertOne: function(table, newBurger, cb) {
    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [table, newBurger], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  } ,
  updateOne: function(table, burgerID, cb) {
    var queryString = "UPDATE ?? SET devoured=1 WHERE id=?";
    connection.query(queryString, [table, burgerID], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;

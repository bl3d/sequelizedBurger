var express = require("express");
var router = express.Router();
// var burger = require("../models/burger.js");
var db = require("../models");


router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      // res.json(dbBurger);
      // console.log(dbBurger);
      var burgerObject = {
        burgers: dbBurger
      };       
      res.render("index", burgerObject);
    });
});

//add a new burger to the list to devour
router.post("/insert", function(req, res) { 
    db.Burger.create({
      burger_name: req.body.newBurger
    }).then(function(dbBurger) { 
      res.redirect("/");
    });
});

//mark a burger as devoured
router.put("/:id", function(req, res) { 
    db.Burger.update({
      devoured: 1
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.redirect("/");
    });
});







//show all current burger status'
/*router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burgers: data
    }; 
    res.render("index", burgerObject);
  }); 
});

//add a new burger to the list to devour
router.post("/insert", function(req, res) { 
  var burgerName = req.body.newBurger;
  if (burgerName.length > 0) {
    burger.insertOne(req.body.newBurger, function() {
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  } 
});

//mark a burger as devoured
router.put("/:id", function(req, res) { 
  burger.updateOne(req.params.id, function() {
    res.redirect("/");
  }); 
});*/

module.exports = router;
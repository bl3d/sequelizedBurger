var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//show all current burger status'
router.get("/", function(req, res) {
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
});

module.exports = router;
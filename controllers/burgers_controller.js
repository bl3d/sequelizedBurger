var express = require("express");
var router = express.Router();
// var burger = require("../models/burger.js");
var db = require("../models");


router.get("/", function(req, res) {
    db.Burger.findAll({
      order: '`burger_name` ASC'
    }).then(function(dbBurger) { 
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


module.exports = router;
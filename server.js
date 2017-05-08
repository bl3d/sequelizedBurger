var express = require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 3000;
var db = require("./models");
 
app.use(express.static(process.cwd() + "/public")); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(methodOverride("_method"));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


db.sequelize.sync({/* force: true */}).then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});


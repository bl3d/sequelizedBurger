var express = require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 3000;
 
app.use(express.static(process.cwd() + "/public")); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(methodOverride("_method"));

// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});


/***********************
 * server for Eat-Da-Burger
 * 
 * @author Jennifer Grace
 * 
 * 06-29-19
 ***********************/

var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var handlebars = require('express-handlebars');

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

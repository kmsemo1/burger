var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "Nonfatbearz1",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

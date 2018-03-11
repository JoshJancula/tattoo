// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Use morgan logger for logging requests
app.use(logger("dev"));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));


// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/email-routes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 
  //  route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
 
 
  //  route loads ez.html
  app.get("/ez", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ez.html"));
  });
 
  // route loads mike.html
  app.get("/mike", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mike.html"));
  });
  
  // route loads ike.html
  app.get("/ike", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ike.html"));
  });
  
  // route loads chris.html
  app.get("/chris", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chris.html"));
  });
  
  // route loads rates.html
  app.get("/rates", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rates.html"));
  });
  
};

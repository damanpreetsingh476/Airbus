var express = require("express");
var app = express();

app.use("/assets", express.static(__dirname + "/assets"));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("index");
});

// index page but with other route
app.get("/index", function (req, res) {
  res.render("index");
});

// navigation page
app.get("/navigation", function (req, res) {
  res.render("navigation");
});

// navigation page
app.get("/chatbot", function (req, res) {
  res.render("chatbot");
});

app.get("/bugReporting", function (req, res) {
  res.render("bugReporting");
});

app.get("/Announcements", function (req, res) {
  res.render("Announcements");
});

app.get("/Metrics", function (req, res) {
  res.render("Metrics");
});

app.get("/voice", function (req, res) {
  res.render("voice");
});

app.listen(80);
console.log("Server is listening on port 80");
// Create web server with express.js
// Create a new route for the comments
// Return the comments json array
// Start the server and test the route

var express = require("express");
var app = express();

// Array of comments
var comments = [
  { name: "John", comment: "Hello" },
  { name: "Jane", comment: "Hi" }
];

// Route for the comments
app.get("/comments", function(req, res) {
  res.json(comments);
});

// Start server
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
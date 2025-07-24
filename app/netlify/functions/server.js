const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

// Create Express app
const app = express();

// routing
const home = require('../../src/routes/home');

// app, setting
app.set("views", path.join(__dirname, "../../src/views"));
app.set("view engine", "ejs");

// use -> method to register middleware
app.use(express.static(path.join(__dirname, "../../src/public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", home);

// favicon
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../../src/public/favicon/clnqlogo.ico"));
});

// robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow:/");
});

// Export the serverless function
exports.handler = serverless(app);

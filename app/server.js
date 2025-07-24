// module
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();

// routing
const home = require("./src/routes/home");

// app, setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use -> method to register middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(
  favicon(path.join(__dirname, "src", "public", "favicon", "clnqlogo.ico"))
);
app.use(express.urlencoded({ extended: true }));
app.use("/", home);

// robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow:/");
});

module.exports = app;

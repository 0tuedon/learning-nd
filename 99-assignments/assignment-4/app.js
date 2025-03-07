const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");

// Add Routes
const rootRoute = require("./routes");

const server = express();

// server.engine(".hbs", engine({ extname: ".hbs" }));

server.use(bodyParser.urlencoded({ extended: false }));

// server.set("view engine", '.hbs');

// server.set("view engine", "pug");

server.set("view engine", "ejs");
server.use(rootRoute.router);

server.listen(3001);


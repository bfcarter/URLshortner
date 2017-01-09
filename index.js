var express = require("express");
var bodyParser = require("body-parser");
var mainRouter = require("./routers/");
var logger = require("./middlewares/logger.js");
var bannedIpsMiddleware = require("./middlewares/bannedIps.js");

var app = express();

app.enable("trust proxy");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(logger);
app.use(bannedIpsMiddleware);

app.use(mainRouter);

module.exports = app;


//npm express and bodyparser
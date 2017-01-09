var express = require("express");
var urlsRouter = require("./urls/");
var getRandomText = require("../../../controllers/getRandomText.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.send("/");
});

router.use("/urls", urlsRouter);

module.exports = router;
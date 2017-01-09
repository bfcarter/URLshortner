var express = require("express");
var apiRouter = require("./api/");
var goRouter = require("./go/");

var router = express.Router();

router.get("/", function(req, res) {
    res.send("/");
});

router.use("/api", apiRouter);
router.use("/go", goRouter);

module.exports = router;
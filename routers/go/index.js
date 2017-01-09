var express = require("express");
var models = require("../../models/");
var getRandomText = require("../../controllers/getRandomText.js");

var router = express.Router();

router.get("/:id", function (req, res) {
    var id = req.params.id;

    models.shortUrl.findOne({
        where: { id: id }
    }).then(function (shortUrl) {
        res.redirect(shortUrl.realUrl);
    }).catch(function () {
        res.send("Error on redirecting.");
    });
});

module.exports = router;
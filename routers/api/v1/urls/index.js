var express = require("express");
var models = require("../../../../models/");
var getRandomText = require("../../../../controllers/getRandomText.js");

var router = express.Router();

router.post("/", function (req, res) {
    var url = req.body.url;

    var randText = getRandomText(9);
    var shorturl = "/go/" + randText;

    models.shortUrl.create({
        id: randText,
        realUrl: url
    }).then(function () {
        res.json({
            message: "Your shortened url for " + url + " is " + shorturl,
            shortUrl: shorturl,
            error: false
        });
    }).catch(function () {
        res.json({
            error: true
        });
    });
});

router.get("/", function (req, res) {
    models.shortUrl.findAll().then(function (shortUrls) {
        res.json({
            data: shortUrls,
            error: false
        });
    }).catch(function () {
        res.json({
            error: true
        });
    });
});

router.get("/:id", function (req, res) {
    var id = req.params.id;

    models.shortUrl.findOne({
        where: { id: id }
    }).then(function (shortUrl) {
        res.json({
            data: shortUrl,
            error: false
        });
    }).catch(function () {
        res.json({
            error: true
        });
    });
});

router.post("/:id", function (req, res) {
    var id = req.params.id;
    var url = req.body.url;

    models.shortUrl.update({
        realUrl: url
    }, {
            where: {
                id: id
            }
        })
        .then(function () {
            res.json({
                error: false
            });
        }).catch(function () {
            res.json({
                error: true
            });
        });
});

router.delete("/:id", function (req, res) {
    var id = req.params.id;

    models.shortUrl.findOne({
        where: { id: id }
    }).then(function (shortUrl) {
        if (!shortUrl) {
            res.json({
                error: true
            });
            return;
        }

        shortUrl.destroy().then(function () {
            res.json({
                error: false
            });
        }).catch(function () {
            res.json({
                error: true
            });
        });
    }).catch(function () {
        res.json({
            error: true
        });
    });
});

module.exports = router;
var app = require("../");
var models = require("../models/");

models.sequelize.sync().then(function () {
    app.listen(3000, function () {
        console.log("Application is listening on port 3000");
    });
});
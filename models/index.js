var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

var config = require("../config.js");
var sequelize = new Sequelize(config.database, config.login, config.password, {
    host: config.hostname,
    port: config.port,
    dialect: config.type,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
module.exports = function (sequelize, DataTypes) {
    var shortUrl = sequelize.define("shortUrl", {
        id: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
            primaryKey: true
        },
        realUrl: {
            type: DataTypes.STRING,
            required: true
        }
    });

    return shortUrl;
};
module.exports = function(req, res, next) {
    var ip = req.ip;
    var realUrl = req.originalUrl;

    console.log("ip: ", ip, " sent an request to url: ", realUrl);

    next();
};
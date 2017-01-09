var bannedIps = ["8.8.8.8"];

module.exports = function(req, res, next) {
    var ip = req.ip;

    if(bannedIps.includes(ip)) {
        res.send("You are banned.");
        return;
    }

    next();
};
const time = require('moment');
const fs = require('fs');
const logs = (req, res, next) => {
    const log = `${req.protocol}://${req.get('host')}${req.originalUrl} : ${time().format()}`;
    console.log(log);
    fs.appendFile("logs.txt",log + "\n", err => {
        if (err)
        {
            console.log(err);
        }});
    next();
};
module.exports = logs;
//********** /url **********

const { ok } = require("assert");
const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(5000);


//********** current date and time **********

// const https = require("https");
// const dt = require("./date")

// https.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("the date and time currently" + dt.myDateTime());
//     res.end();
// }).listen(5000);




//********** month and year like this url => ?year=2024&month=August **********

// const httpss = require('httpss');
// const url = require('url');

// httpss.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const a = url.parse(req.url, true).query;
//     const txt = a.year + " " + a.month;
//     res.end(txt);
// }).listen(5000);

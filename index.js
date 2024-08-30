//********** /url **********

// const http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(req.url);
//     res.end();
// }).listen(5000);


//********** current date and time **********

// const http = require("http");
// const date = require('./date')

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("the date and time currently" + date.myDateTime());
//     res.end();
// }).listen(2000);



//********** month and year like this url => ?year=2024&month=August **********

// const httpss = require('httpss');
// const url = require('url');

// httpss.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const a = url.parse(req.url, true).query;
//     const txt = a.year + " " + a.month;
//     res.end(txt);
// }).listen(5000);


//************** html file  **************

// const http = require('http');
// const fs = require('fs');

// http.createServer(function (req, res) {
//     fs.readFile('index.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
// }).listen(3001)

// ****** npm upper case ******

// const http = require('http');
// const uc = require('upper-case');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-Type': 'text/html' });
//     res.write(uc.upperCase("hello world"));
//     res.end();
// }).listen(3001)


//*********** The EventEmitter Object *************/

// const events = require('events');
// const eventEmitter = new events.EventEmitter();

// //Create an event handler:
// const myEventHandler = function () {
//     console.log('I hear a scream!');
// }
// //Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');


/*********** Node.js Upload Files ************/

const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(3001)
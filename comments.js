// Create web server
// 1. Create a web server
// 2. Create a web server that listens to a specific port
// 3. Create a web server that listens to a specific port and returns a response

// 1. Create a web server
var http = require('http');

// 2. Create a web server that listens to a specific port
// var server = http.createServer();
// server.listen(3000);

// 3. Create a web server that listens to a specific port and returns a response
var server = http.createServer(function (req, res) {
  res.end('Hello, world!');
});
server.listen(3000);

// Now, let's test the server in the browser
// http://localhost:3000
// You should see the message "Hello, world!" in the browser.

// Create a web server that serves static files
// 1. Create a web server that serves static files
// 2. Create a web server that serves static files and handles 404 errors

// 1. Create a web server that serves static files
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.createReadStream(__dirname + '/public/index.html').pipe(res);
});
server.listen(3000);

// 2. Create a web server that serves static files and handles 404 errors
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.createReadStream(__dirname + '/public/index.html').pipe(res);
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});
server.listen(3000);

// Create a web server that serves JSON data
// 1. Create a web server that serves JSON data
// 2. Create a web server that serves JSON data and handles 404 errors

// 1. Create a web server that serves JSON data
var http = require('http');

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ name: 'John Doe', age: 25 }));
});
server.listen(3000);

// 2. Create a web server that serves JSON data and handles 404 errors
var http = require('http');

var server = http.createServer(function (req,
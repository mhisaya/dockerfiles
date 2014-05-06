
var express = require('express');
var st = require('st');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

var mount = st({ path: '/src/angular/app', url: '/angular/app' })

// App
var app = express();
app.get('/service', function (req, res) {
  res.send('Hello World\n');
});

app.get('/angular/app/*', function (req, res) {
  mount(req, res, function() {
    res.end('This is not a static file.')
  })
});

app.listen(PORT)

console.log('Running on http://localhost:' + PORT);

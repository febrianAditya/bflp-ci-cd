var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "lempernya juga enak looh" } }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(8080);
module.exports = app;

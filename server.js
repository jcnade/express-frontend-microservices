var express = require('express');
var bodyParser = require('body-parser');

/*
 * Express 4.*
 */

var app = express();
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'jade');


app.get('/', function (req, res) {
    res.render('index',{})
});

app.get('/service1', function (req, res) {
    res.render('service1',{})
});

app.get('/service2', function (req, res) {
    res.render('service2',{})
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});

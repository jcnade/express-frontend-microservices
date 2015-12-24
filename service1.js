var express = require('express');
var bodyParser = require('body-parser');

/*
 * Express 4.*
 */

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'jade');


app.get('/service1', function (req, res) {
    res.render('service1',{})
});

app.post('/service1', function (req, res) {
    res.send(req.body)
});


var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});

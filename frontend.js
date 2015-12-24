var express     = require('express');
var bodyParser  = require('body-parser');
var request     = require('request');

/*
 * Express 4.*
 */

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'jade');


app.get('/', function (req, res) {
    res.render('index',{})
});

app.get('/local.html', function (req, res) {
    res.render('local',{})
});

app.post('/service1', function (req, res) {
    request.post('http://localhost:3001/service1', { form : req.body} ).pipe(res);
});




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});

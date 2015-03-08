var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');

var db = require('monk')('localhost:27017/test');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

var port = 8081;
app.listen(port);

console.log('Server is running on port ' + port);

require('./app/api/projects')(app, db);
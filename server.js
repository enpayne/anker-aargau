var express         = require('express');
var app             = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

var port = 8081;
app.listen(port);
console.log('Server is running on port ' + port);
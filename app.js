var express = require('express');
var routes = require('./routes/index');
var about = require('./routes/about');

var app = express();
// view engine setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/about', about);


app.listen(3002);

module.exports = app;

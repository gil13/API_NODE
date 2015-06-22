var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } 
    else {
        next();
    }
});


app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
app.use('/', require('./routes'));			//Routes files

app.use(function(req, res, next) {			//If route does not exists set status and msg
    var err = new Error('Not Found');
    err.status = 404;
    next();
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
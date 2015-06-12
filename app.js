var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();

app.use(express.static('www'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/doc', function (req, res) {
  res.send('Doc API');
});

app.get('/photo', function (req, res) {
	console.log(req);
  res.send('Photo API');
});

app.post('/auth',function(req,res){
	var user_name=req.body.user;
	var password=req.body.password;
	console.log("User name = "+user_name+", password is "+password);
	res.end('done');
});

app.listen(3000, function(){
	console.log('Server working on 3000 port')
});
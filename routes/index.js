var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
 
var auth = require('./auth.js');
var routes = require('./routes.js');
 
router.post('/login', auth.login);
 
router.get('/api/v1/doc', routes.getAll);
// router.get('/api/v1/admin/doc', routes.getAll); --> auth and validation
 
module.exports = router;
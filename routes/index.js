var express = require('express');
var router = express.Router();
 
var auth = require('./auth.js');
var routes = require('./routes.js');
 
router.post('/login', auth.login);
 
router.get('/api/v1/doc', routes.getAll);
router.get('/api/v1/doc/:docId', routes.getOne);
 
module.exports = router;
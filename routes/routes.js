var bodyParser = require("body-parser");
var db = require('mongoskin').db('mongodb://localhost:27017/dbName', {safe:true});

var routes = {
	getAll: function(req, res) {
		db.collection('collectionName').find().toArray(function(err, result) {
    		if (err) throw err;
			res.json(result);
		});
	}
};

module.exports = routes;
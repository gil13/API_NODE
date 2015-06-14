var bodyParser = require("body-parser");
var db = require('mongoskin').db('mongodb://localhost:27017/Renov8', {safe:true});

var routes = {
	getAll: function(req, res) {
		var dataDb;
		db.collection('doc').find().toArray(function(err, result) {
    		if (err) throw err;
			res.json(result);
		});
	}
};

module.exports = routes;
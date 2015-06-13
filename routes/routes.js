var routes = {
	getAll: function(req, res) {
		var allDocs = data; // Spoof a DB call
		res.json(allDocs);
	},

	getOne: function(req, res) {
		var id = req.params.id;
		var doc = data[0]; // Spoof a DB call
		res.json(doc);
	},
};


//  RESPONSE FROM DB //

var data = [{
		name: 'user 1',
		id: '1'
	}, 
	{
		name: 'user 2',
		id: '2'
	}, 
		{
		name: 'user 3',
		id: '3'
}];

// ----------------//

module.exports = routes;
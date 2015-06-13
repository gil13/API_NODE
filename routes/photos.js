var photos = {
	getAll: function(req, res) {
		var allPhotos = data; // Spoof a DB call
		res.json(allPhotos);
	},

	getOne: function(req, res) {
		var id = req.params.id;
		var photo = data[0]; // Spoof a DB call
		res.json(photo);
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

module.exports = photos;
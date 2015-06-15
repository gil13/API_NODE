var jwt = require('jwt-simple');
var db = require('mongoskin').db('mongodb://localhost:27017/Renov8', {safe:true});

var tokenId = null;
var userData = null;

var auth = {
	login: function(req, res) {

		var username = req.body.username || '';
		var password = req.body.password || '';

		if (username == '' || password == '') {
			res.status(401);
			res.json({
				"status": 401,
				"message": "Invalid credentials - Fields empty"
			});

			return;
		}

		auth.validate(req, res, username, password);
	},

	validate: function(req, res, username, password) {

		db.collection('users').findOne({username:username}, function(err, result) {

			if(result === null){
		    	res.status(401);
				res.json({
					"status": 401,
					"message": "Invalid credentials - User does not exist in db"
				});

				return;
			}
			else{
			    if(result.password === password && result){
					res.json(genToken(result));
			    }
			    else{
			    	res.status(401);
					res.json({
						"status": 401,
						"message": "Invalid credentials - Auth fail, wrong password"
					});

					return;
			    }
		    } 
		});
	},

	validateUser: function(token) {
		if(tokenId === token){
			return userData;
		}
	},
}
		
// private method
function genToken(user) {
	var expires = expiresIn(7); // 7 days
	var token = jwt.encode({
		exp: expires
	}, require('../config/secret')());

	delete user.password;
	tokenId = token;
	userData = user;

	return {
		token: token,
		expires: expires,
		user: user
	};
}

function expiresIn(numDays) {
	var dateObj = new Date();
	return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;
var db = require('mongojs').connect("justplay", ['users', 'games']);

var findUser = function(id, callback){
	db.users.findOne({id: id}, function(e, o){
		if(e) callback("error", e);
		if(o) callback(1, o);
		else callback(0);
	});
}

var addUser = function(data, callback){
	db.users.insert(data, function(e, o){
		if(e) callback(0);
		else {
			callback(1, o);
		}
	});
}

exports.findUser = findUser;
exports.addUser = addUser;


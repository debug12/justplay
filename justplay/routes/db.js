var db = require('mongojs').connect("justplay", ['users', 'games']);

var findUser = function(id, callback){
	db.users.findOne({_id: id}, function(e, o){
		if(e) callback(0);
		if(o) callback(1, o);
		else callback(0);
	});
}

var addUser = function(data, callback){
	db.users.save(data, function(e, o){
		if(e) callback(0);
		else callback(1);
	})
}

exports.findUser = findUser;
exports.addUser = addUser;
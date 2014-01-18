exports.guestLogin = function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var obj = {
		name: name,
		email: email
	}
	req.session.user = obj;
	res.redirect('/create');
};

exports.gameSave  = function(req,res){
	gameCollection.save({
		sport: req.param('sport'),
		descript: req.param('descrip'),
		time: req.param('time')},
		function(error, docs){
			res.redirect('/create');
		});
	};
exports.guestLogin = function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var obj = {
		name: name,
		email: email
	}
	req.session.user = obj;
	res.redirect('/create');
}
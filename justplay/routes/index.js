
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.home = function(req, res){
	res.render('home', {title: "Home"});
};

exports.ronnieshome = function(req, res){
	res.render('ronnieshome', {title: "Ronnie's Home"});
};

exports.create = function(req, res){
	res.render('create', {title: "Create a Game."});
};

exports.find = function(req, res){
	res.render('find', {title: "Find a game"})
};



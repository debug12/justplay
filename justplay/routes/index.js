
/*
 * GET home page.
 */
 var passport = require('passport');
 var config = require('./config.js');
 var FacebookStrategy = require('passport-facebook').Strategy;
 var db = require('./db.js');

 passport.use(new FacebookStrategy({
 	clientID: config.appID,
 	clientSecret: config.appSecret,
 	callbackURL: "http://localhost:3000/auth/facebook/callback"
 },
 	function(accessToken, refreshToken, profile, done){
 		db.findUser(profile._json.id, function(good, result){
 			if(good == "error") {return done(result);}
 			else if(!good){
 				db.addUser(profile._json, function(good, user){
 					return done(null, user);
 				});
 			} 
 			done(null, result);
 		})
 	}
 ));

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.home = function(req, res){
	res.render('home', {title: "Home"});
};

exports.page2 = function(req, res){
	res.render('page2', {title: "Page 2"});
};

exports.create = function(req, res){
	res.render('create', {title: "Create a Game."});
};

exports.find = function(req, res){
	res.render('find', {title: "Find a game"})
};

exports.home2 = function(req, res){
	res.render('home2', {title: "Home"});
}

exports.auth = passport.authenticate('facebook', {scope: ['email']});
exports.callback = passport.authenticate('facebook', {successRedirect: '/home2',
													  failureRedirect: '/home2'})



/*
 * GET home page.
 */
 var passport = require('passport');
 var config = require('./config.js');
 var http = require('http');
 var FacebookStrategy = require('passport-facebook').Strategy;
 var db = require('./db.js');
 var GooglePlace = require('google-places');
 var places = new GooglePlace(config.googleBrowser);
 var foursquare = (require('foursquarevenues')(config.fourSquareId, config.fourSquareSecret));

 var params = {
 	"near": 'Ann Arbor, MI',
 	"categoryId": '4f4528bc4b90abdf24c9de85',
 	"intent" : 'browse'
 }

 foursquare.getVenues(params, function(e, venues){
 	console.log(venues.response);
 });

 passport.serializeUser(function(user, done){
 	done(null, user.id);
 });

 passport.deserializeUser(function(id, done){
 	db.findUser(id, function(good, user){
 		if(good){
 			done(null, user);
 		}
 	});
 });

 passport.use(new FacebookStrategy({
 	clientID: config.appID,
 	clientSecret: config.appSecret,
 	callbackURL: "http://localhost:3000/auth/facebook/callback"
 },
 	function(accessToken, refreshToken, profile, done){
 		db.findUser(profile._json.id, function(good, result){
 			if(good == "error") {return done(result);}
 			else if(good == 0){
 				db.addUser(profile._json, function(great, user){
 					if(great){return done(null, user[0]);}
 				});
 			}else{
 				return done(null, result);
 			} 
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
	config.redirect(req, function(good){
		if(good){
			res.render('create', {title: "Create a Game."});
		} else{
			res.redirect('/');
		}
	});
};

exports.find = function(req, res){
	res.render('find', {title: "Find a game"})
};

exports.home2 = function(req, res){
	res.render('home2', {title: "Home"});
}

exports.auth = passport.authenticate('facebook', {scope: ['email']});

exports.callback = passport.authenticate('facebook', {successRedirect: '/create',
													  failureRedirect: '/failure'});

exports.geo = function(req, res){
	res.render('geolocation');
}
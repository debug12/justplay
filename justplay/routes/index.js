
/*
 * GET home page.
 */
 var passport = require('passport');
 var FacebookStrategy = require('passport-facebook').Strategy;
 var db = require('./db.js');

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


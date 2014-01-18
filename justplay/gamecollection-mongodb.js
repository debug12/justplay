var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

GameCollection = function(host,port){
	this.db = new Db('node-mongo-justplay', new Server(host, port, {auto_reconnect: true}, {}));
	this.db.open(function(){});
};

GameCollection.prototype.getCollection = function(callback){
	this.db.collection('games', function(error,game_collection){
		if (error) callback(error);
		else callback(null, game_collection);
	});
};

//save
GameCollection.prototype.save = function(games, callback) {
	this.getCollection(function(error, game_collection) {
		if(error) callback (error)
		else {
			if (typeof(games.length) == "undefined")
				games = [games];
			for (var i = 0; i < games.length; i++){
				games = games[i];
				games.created_at = new Date();
		}
			game_collection = insert(articles, function(){
				callback(null, games);
			});
		}
	});
};


exports.GameCollection = GameCollection;
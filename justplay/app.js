
/**
 * Module dependencies.
 */

var express = require('express')
  , passport = require('passport')
  , routes = require('./routes')
  , posts = require('./routes/posts.js')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'dontdropdatdananaaintworryboutnothing'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(__dirname + '/public/scripts'));
  app.use(express.static(__dirname + '/public/stylesheets'));
  app.use(express.static(__dirname + '/public/img'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.home);
app.get('/create', routes.create);
app.get('/page2', routes.page2);
app.get('/find', routes.find);
app.get('/users', user.list);
app.get('/home2', routes.home2);
app.get('/auth/facebook', routes.auth);
app.get('/auth/facebook/callback', routes.callback);
app.get('/geolocation', routes.geo);

app.post('/guestLogin', posts.guestLogin);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

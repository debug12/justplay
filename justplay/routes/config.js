exports.appID = '1406896719524780';
exports.appSecret = 'aec7d63e37d125f372666d93434ca1b7';

var redirect = function(req, callback){
	if(req.session.user == null && req.user == null){
		callback(0);
	} else{
		callback(1);
	}
}

exports.redirect = redirect;

exports.googleServer = 'AIzaSyD7INzw43UKZakUdg4DPT1fCr0ACtB0BWE';
exports.googleBrowser ='AIzaSyDrYa-tpMI0IY4PctUeq6wlPgEL35VxdXM';
exports.fourSquareId = 'Q4M1XAOMVOIB3XL5I1QSY3PGQVLERQ2EYY1JC1UVLIFTQH3P';
exports.fourSquareSecret = 'GYUFG5JYQFE3ZWDEAQ1YREYAEE0B3ZOGRBENITNQKKBJLO0V';

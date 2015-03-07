var mongoose = require('mongoose');
var admin = mongoose.model('admin');

exports.signin = function(req, res, next) {
	admin.find( function(err, admin, count) {
		res.render('login', {
			title:'Login',
			admin: admin
		});
	});
};

exports.login = function(req, res) {
	db.collection('admin', function(err, collection){
		for (var account in rows)
			if((account.accont == req.body.name)) {
				res.locals.authenticated = req.session.logined ;
			};
		});
	});
	res.redirect('/contact');
};
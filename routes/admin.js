var mongoose = require('mongoose');


exports.signin = function(req, res, next) {
	res.render('login', {
			title:'Login'
	});
};

exports.login = function(req, res) {
	db.collection('admin', function(err, collection){
		for (var account in rows)
			if((account.accont == req.body.name)) {
				console.log('Succedd to login');
				res.locals.authenticated = req.session.logined ;
				res.redirect('/contact');
			};
			if((account.accont != req.body.name)) {
				console.log('Fail to login');
				res.render('/', {
				title:'Login' }
			};
		});
};
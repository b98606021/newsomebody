var mongoose = require('mongoose');
var mongo = require('mongodb');



exports.signin = function(req, res, next) {
	res.render('login', {
			title:'Login'
	});
};

exports.login = function(req, res) {
	var query = {account: req.body.user, passwd: req.body.passwd};
	mongoose.admin.find(query, function(err, doc){
		if (doc==1) {
			var find = first.admin.find(function(error, result) {
				if (error) {
					res.send(error)
					res.render('login');
				} else {
					res.locals.username = req.body.user ;
					res.locals.authenticated = req.session.logined;
					res.render('index' , {
						title: 'Administration mode',
					});
				}
			});
		} else {
			res.render('login', {
				title: 'Again'
			});
		}
	});
};


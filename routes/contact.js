var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

exports.contact = function(req, res, next) {
	Message.find( function(err, messages, count) {
		res.render('contact', {
			title:'contact',
			messages: messages
		});
	});
	res.locals.username = req.session.name ;
	res.locals.authenticated = req.session.logined ;
};

exports.addmessage = function(req, res) {
	new Message ({
		Name: req.body.Name,
		Content: req.body.Content,
		CreateDate: Date.now()
	}).save( function(err) {
		if (err) {
			console.log('Fail to save to DB');
			return;
		}
		console.log('Save to DB');
	});
	res.redirect('/contact');
};
exports.video1 = function(req, res, next) {
	res.render('video', {title:'video1'});
};

exports.video2 = function(req, res, next) {
	res.render('video', {title:'video2'});
};
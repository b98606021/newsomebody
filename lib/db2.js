var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var admin = new Schema ({
	account: String,
	passwd: String,
	CreateDate: Date
});

mongoose.model('admin', admin);
mongoose.connect('mongodb://localhost/admin');
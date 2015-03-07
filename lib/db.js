var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema ({
	Name: String,
	Email: String,
	Content: String,
	CreateDate: Date
});

var Comment = new Schema ({
	Admin: String,
	Comment: String,
	MessageID: Schema.Types.ObjectId,
	CreateDate: Date
});

mongoose.model('Message', Message);
mongoose.model('Comment', Comment);
mongoose.connect('mongodb://localhost/contact');
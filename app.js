require('./lib/db');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var mongo = require('mongodb');

var index = require('./routes/index');
var contact = require('./routes/contact');
var blog = require('./routes/blog');
var introduction = require('./routes/introduction');
var portfolio = require('./routes/portfolio');
var schedule = require('./routes/schedule');
var video = require('./routes/video');
var admin = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
    key:'node',
    secret:'hello',
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.index);
app.get('/contact', contact.contact);
app.get('/blog', blog.blog);
app.get('/introduction', introduction.introduction);
app.get('/portfolio_one', portfolio.portfolio_one);
app.get('/schedule', schedule.schedule);
app.get('/video1', video.video1);
app.get('/video2', video.video2);
app.post('/apis/addmessage', contact.addmessage);
app.get('/login', admin.signin);
app.post('/apis/login', admin.login)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

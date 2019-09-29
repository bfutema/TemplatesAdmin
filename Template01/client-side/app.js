var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');

var app = express();

app.use(require('express-session')({
    name: 'Template01',
    secret: '3f4ff319140e8ef47d5229e2801c9e4b',
    resave: false,
    saveUninitialized: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', loginRouter);
app.use('/', homeRouter);

app.use(function (rq, rs, nxt) {
    rs.redirect('/auth/login');
    nxt(createError(404));
});

app.use(function (err, rq, rs, nxt) {
    rs.locals.message = err.message;
    rs.locals.error = rq.app.get('env') === 'development' ? err : {};

    rs.status(err.status || 500);
    rs.render('error');
});

module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("./db");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')
var socket = require('socket.io');
var http = require('http').Server(app);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.set('port', (process.env.PORT || 8080));

var server = app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});

 var io = socket(server);

 io.on('connection', function (socket) {
  console.log("made socket connection", socket.id);

  socket.on('state', function (data) {

    io.sockets.emit('state', data);
    /* console.log(data) */;
    socket.broadcast.emit('state', "degisim tamam")
  });

  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data)
  })
}); 


module.exports = app;



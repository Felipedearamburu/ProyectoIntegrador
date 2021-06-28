const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const app = express();

// routers controllers


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');

// Base de datos

const db = require("./database/models")



// session configurado

app.use(
  session({
      secret: "deluxecars",
      resave: false,
      saveUninitialized: true
  })
)

// chequeo usuario logueado

app.use(function(req, res, next) {

  if (req.session.usuario != null) {
      res.locals = {
          usuarioLogueado: req.session.usuario
      }

  } else {
      res.locals = {
          usuario: null
      }
  }

  return next()
})

// cookies 
app.use(cookieParser()),

//middleware : ver si hay alguien logueado o no

app.use(function(req , res, next){
  if (req.session.usuario != undefined) {
    
    res.locals = req.session.usuario;
  
      next()
    }
  next()    
  }
  
)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);



const { EWOULDBLOCK } = require('constants');
const Usuario = require('./database/models/Usuario');











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

module.exports = app;

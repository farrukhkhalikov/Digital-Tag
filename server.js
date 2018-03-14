require('dotenv').config()

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const userController = require('./controllers/userController')
const flightController = require('./controllers/flightController')

const app = express();
mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
}) 

app.use(express.static(`${__dirname}/client/build`))




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/flights/:id/users', userController)
app.use('/api/flights', flightController)
//const { User } = require('./db/schema')

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const router = express.Router()
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`)
})


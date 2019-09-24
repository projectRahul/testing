var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
var socket = require('./api/includes/socket');
// var twilio = require('./api/includes/twilio');
var cors = require('cors'),
mongoose = require('mongoose'),
allModel = require('./api/includes/allModels'),

bodyParser = require('body-parser');

mongoose.set('useCreateIndex', true);

app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hospital_93', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route



//Middleware If any other route call which is not present
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log(port);
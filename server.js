var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
var cors = require('cors'),



mongoose = require('mongoose'),
User = require('./api/models/userModel'), //created model loading here
Patient = require('./api/models/patientModel'), //created model loading here
PatientMedication = require('./api/models/patientMedicationModel'), //created model loading here
PatientMedicationAcc = require('./api/models/patientMedicationAccModel'), //created model loading here
csvRecord = require('./api/models/csvRecordModel'), //created model loading here

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


// const path = require('path');
// const http = require('http');
// app.use(express.static(__dirname+'/dist/HealthCare'));
// app.get('/*',(req,res)=> res.sendFile(path.join(__dirname)));
// const server = http.createServer(app);
// server.listen(port);




console.log(port);
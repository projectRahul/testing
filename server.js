var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
var http = require('http').createServer();
// const io = require('socket.io')(server);
var io = require('socket.io')(http).listen('3300');
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

io.on('connection',(socket)=>{
		console.log('connected');
	socket.on('join',function(data){//Join
		socket.join(data.room);
		console.log(data.user+' Joined --> '+ data.room);
		socket.broadcast.to(data.room).emit('newUserJoined',{user: data.user,message: "has joined" });
	});
	socket.on('leave',function(data){//Leave
		console.log('left',data);
		socket.broadcast.to(data.room).emit('left room',{user: data.user,message: "has left" });
		socket.leave(data.room);
	});
	socket.on('message',function(data){
		console.log('message',data);
		io.in(data.room).emit('new message',{user: data.user,message: data.message });
	});
	socket.on('typing',function(data){
		if(data !=''){
			socket.broadcast.to(data.room).emit('usertyping',data.user +" is typing");
		}else{
			socket.broadcast.to(data.room).emit('usertyping','');
		}
	});	
});

//Middleware If any other route call which is not present
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log(port);
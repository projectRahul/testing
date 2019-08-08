var http = require('http').createServer();
var io = require('socket.io')(http).listen('3300');

const notifier = require('node-notifier');
io.on('connection',(socket)=>{
		// console.log('connected');
	socket.on('join',function(data){//Join
		socket.join(data.room);
		// console.log(data.user+' Joined --> '+ data.room);
		socket.broadcast.to(data.room).emit('newUserJoined',{user: data.user,message: "has joined" },notifier.notify({ title: data.user,message: 'Joined '+ data.room}));		
	});
	socket.on('leave',function(data){//Leave
		// console.log('left',data);
		socket.broadcast.to(data.room).emit('left room',{user: data.user,message: "has left" },notifier.notify({ title: data.user,message: 'left '+ data.room}));
		socket.leave(data.room);
	});
	socket.on('message',function(data){
		// console.log('message',data);
		io.in(data.room).emit('new message',{user: data.user,message: data.message },notifier.notify({ title: data.user,message: data.message}));
	});
	socket.on('typing',function(data){
		if(data !=''){
			socket.broadcast.to(data.room).emit('usertyping',data.user +" is typing");
		}else{
			socket.broadcast.to(data.room).emit('usertyping','');
		}
	});	
});

module.exports = io;
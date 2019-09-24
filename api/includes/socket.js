var http = require('http').createServer();
var io = require('socket.io')(http).listen('3300');

const notifier = require('node-notifier');
io.on('connection',(socket)=>{
		// console.log('connected');
	socket.on('join',function(data){//Join
		socket.join(data.room);
		// console.log(data.user+' Joined --> '+ data.room);
		var clients = [];
		clients.push(data.user);
		socket.broadcast.to(data.room).emit('newUserJoined',{user: data.user,message: "has joined",online_user_list: clients },notifier.notify({ title: data.user,message: 'Joined '+ data.room}));		
	});
	socket.on('leave',function(data){//Leave
		// console.log('left',data);
		var clients = [];
		socket.broadcast.to(data.room).emit('left room',{user: data.user,message: "has left",online_user_list: clients },notifier.notify({ title: data.user,message: 'left '+ data.room}));
		socket.leave(data.room);
	});
	socket.on('message',function(data){
		// console.log('message',data);
		var clients = [];
		clients.push(data.user); 
		io.in(data.room).emit('new message',{user: data.user,message: data.message,online_user_list: clients  },notifier.notify({ title: data.user,message: data.message}));
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
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
	user : string;
	room : string;
  messageText : string;
  messageTyping :string = '';
  typing:boolean;
  sub:any;

  messageArray:Array<{user:String,message:String}>=[];

  constructor(private socket: Socket) { 
    this.sub = Observable.interval(2000)
    .subscribe((val) => { this.messageTyping=''; });
  }
  
  ngOnInit() {
    this.socket.on('newUserJoined',(data)=>{
      this.messageArray.push(data);
    });

    this.socket.on('left room',(data)=>{
      this.messageArray.push(data);
    });

    this.socket.on('new message',(data)=>{
      this.messageArray.push(data);
    });

    this.socket.on('usertyping',(data)=>{
      this.messageTyping = data;
    });

  }
  

  join(){
  	this.socket.emit("join", {user:this.user,room:this.room});
  }

  leave(){
    this.socket.emit('leave',{user:this.user,room:this.room});
  }

  sendMessage(){
    this.socket.emit('message',{user:this.user,room:this.room,message:this.messageText});
  }

  timeoutFunction() {
    console.log('happening');
    this.socket.emit('typing', '');
  }

  typefunction() {
    this.socket.emit('typing', {user:this.user,room:this.room});
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
	user : string;
	room : string;
  messageText : string;
  messageArray:Array<{user:String,message:String}>=[];

  constructor(private chat_service: ChatService) {
    this.chat_service.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));

    this.chat_service.userLeftRoom()
      .subscribe(data=> this.messageArray.push(data));

    this.chat_service.newMessageReceived()
      .subscribe(data=> this.messageArray.push(data));
  }
  
  ngOnInit() { }

  join(){
  	this.chat_service.joinRoom({user:this.user,room:this.room});
  }

  leave(){
    this.chat_service.leaveRoom({user:this.user,room:this.room});
  }

  sendMessage(){
    this.chat_service.sendMessage({user:this.user,room:this.room,message:this.messageText});
  }

}

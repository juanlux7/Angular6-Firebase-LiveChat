import { AuthService } from './../../services/auth.service';
import { ChatMessage } from './../../models/ChatMessage.model';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  username: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private authService: AuthService) { 
    authService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
      });
  }

  ngOnInit(ChatMessage = this.chatMessage) {
    this.messageContent = ChatMessage.message;
    this.username = ChatMessage.username;
    this.userEmail = ChatMessage.email;
    this.timeStamp = ChatMessage.timeSent;
  }

}

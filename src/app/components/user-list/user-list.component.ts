import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private chatService: ChatService) { 
    this.chatService.getUsers().valueChanges().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit() {
  }

}

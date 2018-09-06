import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.css']
})
export class IndividualUserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}

import { ChatMessage } from './../../models/ChatMessage.model';
import { ChatService } from './../../services/chat.service';
import { Observable } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-feed-mesagges',
  templateUrl: './feed-mesagges.component.html',
  styleUrls: ['./feed-mesagges.component.css']
})
export class FeedMesaggesComponent implements OnInit, OnChanges {

  mensajes: AngularFireList<any>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {

    this.mensajes = this.chatService.obtenerMensajes();

  }

  ngOnChanges(){

    this.mensajes = this.chatService.obtenerMensajes();

  }

}

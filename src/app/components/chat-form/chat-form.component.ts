import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  mensaje: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  enviar(){

    // metodo para enviar los mensajes al servicio, con la variable mensaje unida al input HTML

    this.chatService.enviarMensaje(this.mensaje);
    this.mensaje = '';
  }

  gestionarSubmit(event){

    // si el usuario pulsa la tecla enter, se llama al metodo enviar y se envia el mensaje

    if(event.keyCode === 13){
      this.enviar();
    }

  }

}

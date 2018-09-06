import { map } from 'rxjs/operators';
import { User } from './../models/User.model';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/ChatMessage.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  ChatMessages: AngularFireList<ChatMessage[]>;
  ChatMessage: ChatMessage;
  usuario: any;
  user: firebase.User;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    // se define el estado del usuario en el constructor

    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }

      this.getUser().subscribe(a => {
        this.usuario = a;
      });
});
}

   getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path).valueChanges();
}

  enviarMensaje(mensaje:string){

    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    this.ChatMessages = this.obtenerMensajes();
    
    this.db.list('mensajes').push(
      {
      message: mensaje,
      timeSent: timeStamp,
      username: this.usuario.displayName,
      email: email
    });
  }

  getTimeStamp(){ // metodo Javascript para costruir el formato fecha/hora valido

    const ahora = new Date();
    const fecha = ahora.getUTCDate() + '/' + ahora.getUTCMonth() + '/' + ahora.getUTCFullYear();
    const hora = ahora.getUTCHours() + ':' + ahora.getUTCMinutes() + ':' + ahora.getUTCSeconds();

    return (fecha + ' ' + hora);
  }

  obtenerMensajes(): any{

    //obtener lista de mensajes, ordenados por la primary key

    return this.db.list('mensajes', ref => ref.limitToLast(25).orderByKey()).valueChanges();

  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
}

}

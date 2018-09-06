import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

//rutas SPA y formularios
import { RouterModule } from '@angular/router';
import { appRoutes } from '../rutas';
import { FormsModule } from '@angular/forms';

// componentes importados
import { AppComponent } from './app.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { FeedMesaggesComponent } from './components/feed-mesagges/feed-mesagges.component';
import { MessageComponent } from './components/message/message.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { IndividualUserComponent } from './components/individual-user/individual-user.component';

// servicios importados

import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

// firebase modules

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedMesaggesComponent,
    MessageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    UserListComponent,
    IndividualUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService, //servicios
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

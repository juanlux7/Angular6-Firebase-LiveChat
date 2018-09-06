import { ChatroomComponent } from './app/components/chatroom/chatroom.component';
import { LoginFormComponent } from './app/components/login-form/login-form.component';
import { RegisterFormComponent } from './app/components/register-form/register-form.component';
import { Routes } from '@angular/router';




// definicion de una constante para las rutas SPA del proyecto - router-outlet

export const appRoutes: Routes = [

    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'chatroom', component: ChatroomComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
]
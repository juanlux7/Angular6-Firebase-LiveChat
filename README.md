# Angular6Chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Angular y Firebase Chat en tiempo real - Angular and Firebase real-time chat


![alt text](https://user-images.githubusercontent.com/40801686/42611697-b51def0e-8597-11e8-80f3-40f0e8a7e76f.png)

(Español)

Proyecto Angular 6 y Firebase para la creacion de un chat en tiempo real, gracias a la base de datos firebase.


# Angular6-Firebase-LiveChat - informacion del proyecto

![alt text](https://user-images.githubusercontent.com/40801686/42611696-b47632dc-8597-11e8-98ee-3f51fb3fed22.png)

(Español)

Este es un proyecto hecho en Angular 6 y Firebase como backend y sistema de alamacenamiento. Consta de una aplicacion Angular, segmentada en los siguientes componentes:

- App.component (componente base del proyecto, encargado de desplegar todos los componentes, desde el router-outlet y el navbar)

- App.navbar (Componente estatico que representa el menu de navegacion, el cual no forma parte del router-outlet y siempre se renderiza)

- chat-form.component (componente que representa el formulario de envio de mensajes, el cual llama al metodo necesario para enviar los mensajes escritos desde el input de tipo texto)

- feed-messages.component (es el componente encargado de desplegar todos los componentes de tipo message, o mensaje individual, mediante un bucle *ngFor)

- message.component (componnente encargado de mostrar los mensajes de forma individual)

- individual-usar.component (componente para mostrar informacion individual de cada usuario, como su username o su status)

- user-list.component (componente encargado de mostrar una lista de usuarios, de tipo individual-user.component)

- chatroom.component (es el componente padre de otros tres componentes, chat-form, user-list y feed.messages)

- login.component (es el componente encargado de mostrar el componente de inicio de sesion de usuarios, el cual conecta con el servicio de autenticacion, auth.service.ts para comprobar el inicio de sesion)

- register.component (componente encargado de mostrar el formulario de registro de usuarios, el cual tambien conecta con el servicio de autenticacion, auth.service.ts, para almacenar los usuarios en Firebase)

Los servicios angular empleados en este proyecto son:

  - auth.service.ts: Servicio encargado de recoger los metodos propios de inicio de sesion mediante email y password en Firebase, creacion de cuentas de usuario, comprobacion del usuario logeado etc.
  
  - chat.service.ts: S ervicio encargado de gestionar los mensajes enviados a Firebase, con metodos para el envio de un nuevo mensaje, obtencion de los mensajes almacenados en Firebase etc.

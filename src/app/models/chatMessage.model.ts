export class chatMessage { // los campos no son obligatorios (con ?)

    $key?: string;
    email?: string;
    username?: string;
    message?: string;
    timeSent?: Date = new Date();
    
}
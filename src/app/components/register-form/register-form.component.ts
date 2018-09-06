import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  crearCuenta(){

    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;


    this.authService.registrarUsuario(email, password, displayName).then(response => {
      this.router.navigate(['chatroom'])
    }).catch(error => {
      console.log(error);
    });

  }

}

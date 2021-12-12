import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() boolSignUp = new EventEmitter();

  /* @Input()
  valorsignUp!: boolean; */

  token_value = false;
  email: string = '';
  password: string = '';

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  iniciarSesion(email: string, password: string) {
    this.userService.signIn(email, password).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('auth-token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        alert('Bienvenido(a) ' + result.user.username);
        this.boolSignUp.emit('success');
      },
      (err) => {
        console.log(err);
        alert(err.error.mensaje);
      }
    );
  }

  registrarUsuario() {
    this.boolSignUp.emit(true);
  }
}

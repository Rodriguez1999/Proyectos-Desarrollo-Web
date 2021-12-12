import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @Output() registerBack = new EventEmitter();

  firstName: String = '';
  lastName: String = '';
  DNI: String = '';
  birthDate: Date = new Date();
  phone: String = '';
  city: String = '';
  department: String = '';
  address: String = '';
  email: String = '';
  password: String = '';
  confirmPassword: String = '';
  username: String = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  volverLogin(){
    this.registerBack.emit(false);
  }

  registrarUsuario() {
    if (this.password.length > 5) {
      if (this.password === this.confirmPassword) {
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          DNI: this.DNI,
          birthDate: this.birthDate,
          phone: this.phone,
          city: this.city,
          department: this.department,
          address: this.address,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          username: this.username,
        };
        console.log(user);

        this.usersService
          .signUp(
            this.firstName,
            this.lastName,
            this.DNI,
            this.birthDate,
            this.phone,
            this.city,
            this.department,
            this.address,
            this.email,
            this.password,
            this.username
          )
          .subscribe(
            (result) => {
              console.log(result);
              localStorage.setItem('auth-token', result.token);
              alert('Bienvenido(a) a Fastilery' + result.user.username);
              this.registerBack.emit('success');
            },
            (err) => {
              console.log(err);
              alert(err.error.mensaje);
            }
          );
      } else {
        alert('La contraseñas no coinciden');
      }
    } else {
      alert('La contraseña es muy corta ');
    }
  }
}

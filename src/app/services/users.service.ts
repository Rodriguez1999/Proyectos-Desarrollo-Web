import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    console.log('Ingresar correo y contrasena');
    return this.httpClient.post('http://localhost:3000/api/auth/signin', {
      email: email,
      password: password,
    });
  }

  signUp(
    firstName: String,
    lastName: String,
    DNI: String,
    birthDate: Date,
    phone: String,
    city: String,
    department: String,
    address: String,
    email: String,
    password: String,
    username: String
  ): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/auth/signup', {
      firstName: firstName,
      lastName: lastName,
      DNI: DNI,
      birthDate: birthDate,
      phone: phone,
      city: city,
      department: department,
      address: address,
      status: 1,
      statusDetail: 'Habilitado',
      email: email,
      password: password,
      username: username,
    });
  }

}

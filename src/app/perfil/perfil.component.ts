import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  currentRate = 3.14;
  motorista: any = [];
  age = 0;

  url:string = "http://localhost:3550/api/users";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjIzNjMzN2JkYjI0MTI5YzBlNmU1YSIsImlhdCI6MTYzOTA4Mjk2MCwiZXhwIjoxNjM5MTY5MzYwfQ.njjtNswt1IH_OLbXYv--u3gYNqHh6bfPyY-HJpNoAw4'
  });
  //headers = headers.append('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjIyMzlmODZmNmE2NTEyMzk1OWZkYSIsImlhdCI6MTYzOTA2NDQ3OSwiZXhwIjoxNjM5MTUwODc5fQ.9F4O6Xvx_RRiDvFJQH7epl2TqDROgWWf5XTLaBahHH4');

  constructor(private httpClient:HttpClient, private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuario().subscribe(res=>{
      this.motorista = res;
      this.ageCalculator();
    });
  }

  cerrarSesionActual(){
    this.usuariosService.cerrarSesion();
    window.location.replace('http://localhost:4200/login');
  }

  ageCalculator(){
    if(this.motorista.birthDate){
      const convertAge = new Date(this.motorista.birthDate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      console.log(convertAge);
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

  verInformes(){
    window.location.replace('http://localhost:4200/informes');
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  user:any=[];
  public userId:any = localStorage.getItem("userId");
  public _token:any = localStorage.getItem("token");

  url:string = "http://localhost:3550/api/users";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this._token
  });

  constructor(private httpClient:HttpClient) { 
    this._token = localStorage.getItem("token");
  }

  obtenerUsuario():Observable<any>{
    return this.httpClient.get(this.url+`/${this.userId}`, {headers: this.headers});
  }

  actualizarUsuario(motorista:any):Observable<any>{
    return this.httpClient.put(this.url+`/${this.userId}`, motorista, {headers: this.headers});
  }

  cerrarSesion(){
    localStorage.clear();
  }
}

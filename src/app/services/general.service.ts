import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public userId:any = localStorage.getItem("userId");
  public _token:any = localStorage.getItem("token");

  urlUser:string = "http://localhost:3550/api/users";
  urlCompany:string = "http://localhost:3550/api/companies";
  urlOrder:string = "http://localhost:3550/api/orders";
  urlProduct:string = "http://localhost:3550/api/products";
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this._token
  });

  constructor(private httpClient:HttpClient) { 
    this._token = localStorage.getItem("token");
  }

  obtenerEmpresas(){
    return this.httpClient.get(this.urlCompany, {headers: this.headers});
  }

  obtenerUsuarios():Observable<any>{
    return this.httpClient.get(this.urlUser, {headers: this.headers});
  }

  obtenerProductos():Observable<any>{
    return this.httpClient.get(this.urlProduct, {headers: this.headers});
  }
  
  actualizarUsuario(id:any, actInfo:any):Observable<any>{
    return this.httpClient.put(this.urlUser+`/${id}`, actInfo , {headers: this.headers});
  }

  eliminarUsuario(id:any):Observable<any>{
    return this.httpClient.delete(this.urlUser+`/${id}` , {headers: this.headers});
  }

  eliminarProducto(id:any):Observable<any>{
    return this.httpClient.delete(this.urlProduct+`/${id}` , {headers: this.headers});
  }

}

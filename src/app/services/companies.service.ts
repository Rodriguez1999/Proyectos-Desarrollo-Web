import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private httpClient: HttpClient) { }
  loadProfile:string = '';

  set LoadProfile(value:string) {
    this.loadProfile = value;
  }

  get LoadProfile(): string{
    return this.loadProfile;
  }

  obtenerCategorias(token: string): Observable<any>{
      let headers = new HttpHeaders().set('auth-token',token);
      return this.httpClient.get('http://localhost:3000/api/companies/category/',
      {headers:headers})

  }

  listarEmpresas(token:string,category:string): Observable<any>{
    let headers = new HttpHeaders().set('auth-token',token);
    return this.httpClient.get('http://localhost:3000/api/companies/category/'+category+'/',
    {headers:headers})
  }

  obtenerEmpresaById(token:string,id:string): Observable<any>{
    let headers = new HttpHeaders().set('auth-token',token);
    return this.httpClient.get(`http://localhost:3000/api/companies/${id}`,
    {headers:headers})
  }

  obtenerProductoById(token:string,id:string): Observable<any>{
    let headers = new HttpHeaders().set('auth-token',token);
    return this.httpClient.get(`http://localhost:3000/api/products/products/${id}`,
    {headers:headers})
  }


  obtenerProducto(token:string,id:string): Observable<any>{
    let headers = new HttpHeaders().set('auth-token',token);
    return this.httpClient.get(`http://localhost:3000/api/products/${id}`,
    {headers:headers})
  }

  getProductoById(id:string): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/api/products/${id}`);
  }

  enviarOrden(orden: Order, token: string): Observable<any>{
    let headers = new HttpHeaders().set('auth-token',token);
    console.log(headers);
    return this.httpClient.post('http://localhost:3000/api/orders',orden
    ,{headers:headers})
  }

}

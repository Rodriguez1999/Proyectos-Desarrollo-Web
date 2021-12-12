import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  facturaAct:any = "";
  lat:any;
  long:any;
  public userId:any = localStorage.getItem("userId");
  public _token:any = localStorage.getItem("token");

  url:string = "http://localhost:3550/api/orders";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this._token
  });

  constructor(private httpClient:HttpClient) { 
    this._token = localStorage.getItem("token");
  }

  obtenerOrdenesDisponibles():Observable<any>{
    return this.httpClient.get(this.url+"/availables", {headers: this.headers});
  }

  obtenerOrdenProgreso():Observable<any>{
    return this.httpClient.get(this.url+`/availables/${this.userId}`, {headers: this.headers});
  }

  crearFactura(factura:any):Observable<any>{
    return this.httpClient.post(this.url+`/createBill`, factura, {headers: this.headers});
  }

  obtenerInformes():Observable<any>{
    return this.httpClient.get(this.url+`/finished/${this.userId}`, {headers: this.headers})
  }

  idFactura(ordenId:any){
    this.facturaAct = ordenId;
  }

  coordenadas(lat:any, long:any){
    this.lat = lat;
    this.long = long;
  }

  dibujarMapa(){
    let coordenadas = {lat: this.lat, long: this.long};
    return coordenadas;
  }

  obtenerFacturas():Observable<any>{
    return this.httpClient.get(this.url+`/bill/${this.facturaAct}`, {headers: this.headers});
  }

  actualizarOrden(ordenId:any, actualizar:any):Observable<any>{
    return this.httpClient.put(this.url+`/${ordenId}`, actualizar, {headers: this.headers});
  }
}

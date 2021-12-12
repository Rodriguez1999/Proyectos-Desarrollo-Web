import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-pedidos-disponibles',
  templateUrl: './pedidos-disponibles.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./pedidos-disponibles.component.css']
})
export class PedidosDisponiblesComponent implements OnInit {
  closeResult!: string;
  ordenes:any = [];

  actOrder:any = {
    driverId: localStorage.getItem("userId"),
    status: 1,
    statusDetail: "En origen"
  }
  
  constructor(private modalService: NgbModal, private httpClient:HttpClient, private ordenService:OrdenesService) {}

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  ngOnInit(): void {
    this.ordenService.obtenerOrdenesDisponibles()
      .subscribe(res =>{
        this.ordenes = res;
    });
  }

  tomarOrden(ordenId:String){
    this.ordenService.actualizarOrden(ordenId, this.actOrder)
      .subscribe(res =>{
        this.ordenes = res;
        this.ngOnInit();
    });
  }

  cargarMapa(lat:any, long:any){
    this.ordenService.coordenadas(lat, long);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-pedidos-progreso',
  templateUrl: './pedidos-progreso.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./pedidos-progreso.component.css']
})
export class PedidosProgresoComponent implements OnInit {

  ordenes:any = [];
  userId:any = localStorage.getItem("userId");
  ordenActual:any = {
    status: 0,
    statusDetail: ''
  };
  opciones:any = ["Tomada", "En origen", "En camino", "En destino"];
  ordenId:String = "";
  closeResult!: string;

  
  constructor(private modalService: NgbModal, private httpClient:HttpClient, private ordenService:OrdenesService) {}

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  actualizarEstadoModal(content:Object, ordenId:String, status:Number, statusDetail:String){
    this.ordenId = ordenId;
    this.ordenActual.status = status;
    this.ordenActual.statusDetail = statusDetail;
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  actualizarEstadoOrden(exit:Object){
    let numeroEstado = 0;
    for(let i = 0; i < this.opciones.length; i++){
      if(this.ordenActual.statusDetails == this.opciones[i]){
        numeroEstado = i+1;
      }
    }
    this.ordenActual.status = numeroEstado;
    for(let i = 0; i < this.ordenes.length; i++){
      if(this.ordenes[i]._id == this.ordenId){
        console.log(this.ordenActual);
        if(this.ordenes[i].status >= numeroEstado*25){
          console.log('No puedes regresar en los estados de la entrega');
          this.openBackDropCustomClass(exit);
        }else{
          this.ordenService.actualizarOrden(this.ordenId, this.ordenActual)
            .subscribe(res =>{
            console.log('actualizacion: '+res);
            this.ordenes[i].status = this.ordenes[i].status + 25; 
            this.ordenes[i].statusDetail = this.ordenActual.statusDetails;
          });
        }
      }
    }
  }

  terminarEntrega(ordenId:String, fin:Object){
    for(let i = 0; i < this.ordenes.length; i++){
      if(this.ordenes[i]._id == ordenId){
        let factura={
          orderId: ordenId,
          products: this.ordenes[i].products,
          user: this.ordenes[i].name,
          driverId: this.userId,
          deliveryAddress: this.ordenes[i].deliveryAddress,
          purchasePrice: parseFloat((this.ordenes[i].price).toFixed(2)),
          ISV: parseFloat((this.ordenes[i].price*0.15).toFixed(2)),
          adminCommission: this.ordenes[i].products.length*60,
          driverCommission: this.ordenes[i].products.length*50,
          total: parseFloat((this.ordenes[i].price+this.ordenes[i].price*0.15+this.ordenes[i].products.length*60+this.ordenes[i].products.length*50).toFixed(2)),
          sales: 0
        };
        this.ordenService.crearFactura(factura)
          .subscribe(res =>{
            this.ordenActual.status = 5;
            this.ordenActual.statusDetail = "Finalizada";

            this.ordenService.actualizarOrden(ordenId, this.ordenActual)
            .subscribe(res =>{
              this.openBackDropCustomClass(fin);
              this.ngOnInit();
            });
        });
      }
    }
  }

  cargarMapa(lat:any, long:any){
    this.ordenService.coordenadas(lat, long);
  }

  verFactura(ordenId:any){
    this.ordenService.idFactura(ordenId);
  }

  ngOnInit(): void {
    this.ordenService.obtenerOrdenProgreso()
      .subscribe(res =>{
        this.ordenes = res;
      console.log(this.ordenes);
    });
  }
}

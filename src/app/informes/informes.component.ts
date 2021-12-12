import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {
  closeResult!: string;
  ordenes:any = [];
  orden:any = {};

  constructor(private modalService: NgbModal, private httpClient:HttpClient, private ordenesServicio:OrdenesService) {
  }

  ngOnInit(): void {
    this.ordenesServicio.obtenerInformes()
      .subscribe(res =>{
        this.ordenes = res;
        console.log(this.ordenes);
    });
  }

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  verInfoOrden(ordenId:String){
    for(let i =0; i<this.ordenes.length; i++){
      if(ordenId == this.ordenes[i]._id){
        this.orden = this.ordenes[i];
      }
    }
  }

  verFactura(ordenId:any){
    this.ordenesServicio.idFactura(ordenId);
  }
}
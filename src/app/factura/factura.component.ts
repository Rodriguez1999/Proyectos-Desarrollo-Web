import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  facturas:any = [];
  
  constructor(private httpClient:HttpClient, private ordenServicio:OrdenesService) { }

  ngOnInit(): void {
    this.ordenServicio.obtenerFacturas().subscribe(res =>{
      this.facturas = res;
      console.log(this.facturas);
    });
  }

}

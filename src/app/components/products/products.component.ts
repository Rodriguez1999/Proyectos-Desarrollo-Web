import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos:any = [];
  constructor(private productosServicios:GeneralService) { }

  ngOnInit(): void {
    this.productosServicios.obtenerProductos().subscribe(res=>{
      this.productos = res;
    });
  }

  eliminarProducto(id:any){
    this.productosServicios.eliminarProducto(id).subscribe(res=>{
      this.ngOnInit();
    });
  }

}

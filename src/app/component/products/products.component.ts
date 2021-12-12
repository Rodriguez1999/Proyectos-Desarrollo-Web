import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Output() idProduct = new EventEmitter();
  idEmpresa: string = 'ewrewrewr';
  products!: any;

  constructor(private companyService: CompaniesService) {}

  ngOnInit(): void {
    this.cargarProductos(this.IdEmpresa);
  }

  set IdEmpresa(value: string) {
    this.idEmpresa = value;
  }
  get IdEmpresa(): string {
    return this.idEmpresa;
  }

  cargarProductos(id:string) {
    let token = localStorage.getItem('auth-token');
    this.companyService
      .obtenerProductoById(<string>token, id)
      .subscribe(
        (result) => {
          console.log(result);
          this.products = result;
          console.log(result);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  OrdenarProducto(id: string) {
    console.log('Id de producto a Ordenar', id);
    this.idProduct.emit(id);
  }
}

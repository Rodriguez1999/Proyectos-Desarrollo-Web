import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  product!: Product;
  quantity: number =1;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {}

  addProduct(id: string) {
    let token = localStorage.getItem('auth-token');
    this.companiesService.obtenerProducto(<string>token, id).subscribe(
      (result) => {
        console.log(result);
        this.product = result;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addShoppintCart(id:string) {
    if (!this.quantity||this.quantity<=0) {
      alert('Ingrese una cantidad valida');
    }else {
      let shoppingCart =JSON.parse(<string>localStorage.getItem('shop-cart'));
      if (!shoppingCart){
        let products = [{
          productId: id,
          quantity: this.quantity
        }];
        localStorage.setItem('shop-cart', JSON.stringify(products));
      }
      else {
        //shoppingCart = JSON.parse(shoppingCart);
        shoppingCart.push({productId: id, quantity: this.quantity});
        localStorage.setItem('shop-cart', JSON.stringify(shoppingCart));
      }
      console.log(this.quantity);
      alert('Se ha añadido su articulo al carrito de compra');
      window.location.reload();
      //this.product ={name:'',_id:'', price:0, companyID:'', description:'',imgURL:'',status:0};
    }
  }
}

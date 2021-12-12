import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart = [];
  products: any = [];
  totalArticulos:number = 0;
  cantidad= [];

  @Output() PasarPago = new EventEmitter();
  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.obtenerArticulos();
    this.publicarArticulos();
  }

  obtenerArticulos() {
    let shoppingCart = JSON.parse(<string>localStorage.getItem('shop-cart'));
    if (!shoppingCart) {
      alert(
        'Carrito de compras Vacio, añada mas articulos y regrese mas tarde'
      );
    } else {
      //shoppingCart = JSON.parse(shoppingCart);
      this.shoppingCart = shoppingCart;
      console.log(this.shoppingCart);
    }
  }

  publicarArticulos() {
    for (let i = 0; i < this.shoppingCart.length; i++) {
      this.companiesService
        .getProductoById(this.shoppingCart[i]['productId'])
        .subscribe((result) => {
          this.totalArticulos +=this.shoppingCart[i]['quantity'];
          this.cantidad.push(this.shoppingCart[i]['quantity']);
          this.products.push(result);
        });
    }
  }

  quitarProduct(index:number){
    let shoppingCart = JSON.parse(<string>localStorage.getItem('shop-cart'));
    if (!shoppingCart) {
      alert(
        'Carrito de compras Vacio, añada mas articulos y regrese mas tarde'
      );
    } else {
      //shoppingCart = JSON.parse(shoppingCart);
      shoppingCart.splice(index, 1);
      this.shoppingCart = shoppingCart;
      localStorage.setItem('shop-cart', JSON.stringify(shoppingCart));
      console.log(this.shoppingCart);
    }
    alert('El articulo seleccionado ha sido removido de tu carrito de compras')
    window.location.reload();


  }

  procesarCarrito() {
    this.PasarPago.emit(true);
  }
}

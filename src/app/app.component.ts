import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CompaniesComponent } from './component/companies/companies.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { ProductsComponent } from './component/products/products.component';
import { SingleProductComponent } from './component/single-product/single-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class AppComponent {
  @ViewChild('companies')
  companiesComponent!: CompaniesComponent;
  @ViewChild('profile')
  companyProfile!: CompanyProfileComponent;
  @ViewChild('displayProduct')
  singleProduct!: SingleProductComponent;
  myID!: string;
  @ViewChild('products')
  products!: ProductsComponent;

  title = 'proyecto-dw';
  loggedIn = false;
  signUp = false;
  empresaCategoria = false;
  empresa = false;
  idEmpresa: any;
  Mostrar = '';
  addCarrito = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    if (localStorage.getItem('auth-token')) this.loggedIn = !this.loggedIn;
  }

  listadoEmpresas(categoria: any) {
    console.log('Saludos desde el componente padres AppComponent', categoria);
    const token = <string>localStorage.getItem('auth-token');
    this.companiesComponent.listarEmpresas(token, categoria);
    this.empresaCategoria = !this.empresaCategoria;
  }

  perfilEmpresa(id: any) {
    const token = <string>localStorage.getItem('auth-token');
    this.idEmpresa = id;
    console.log(this.idEmpresa);
    this.companyProfile.cargarPerfil(token, id);
    this.empresa = !this.empresa;
  }

  addProduct(idProduct: any) {
    this.addCarrito = true;
    this.singleProduct.addProduct(idProduct);
    this.toogleView();
  }

  switchSingUp(valorsignUp: any) {
    this.signUp = valorsignUp;
  }
  switchLogin(valorsignIn: any) {
    this.signUp = valorsignIn;
  }

  switchComponent(pseudoBool: any) {
    if (pseudoBool == true) {
      this.switchSingUp(pseudoBool);
    }
    if (pseudoBool == false) {
      this.switchLogin(pseudoBool);
    }
    if (pseudoBool == 'success') {
      this.loggedIn = !this.loggedIn;
    }
  }

  cargarProductos(value: any) {
    console.log(value, 'valor de la empresas desde app component');
    this.products.cargarProductos(value);
  }

  enviarId(id: string) {
    console.log(id);
  }

  toogleView() {
    this.Mostrar = 'd-none';
  }

  open(content: any) {
    this.modalService.open(content);
  }
}

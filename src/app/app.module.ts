import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './component/categories/categories.component';
import { CompaniesComponent } from './component/companies/companies.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { ProductsComponent } from './component/products/products.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CcProcessComponent } from './component/cc-process/cc-process.component';
import { DeliveryUbicationComponent } from './component/delivery-ubication/delivery-ubication.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './component/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    CompaniesComponent,
    CompanyProfileComponent,
    ProductsComponent,
    SingleProductComponent,
    ShoppingCartComponent,
    CcProcessComponent,
    DeliveryUbicationComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

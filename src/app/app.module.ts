import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

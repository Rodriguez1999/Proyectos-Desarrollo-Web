import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { LoginLandingComponent } from './components/login-landing/login-landing.component';
import { ProductsComponent } from './components/products/products.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'companies', component: CompaniesComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'users', component: UserComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'landing', component: LoginLandingComponent},
  {path: 'login', component: SidebarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

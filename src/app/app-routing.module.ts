import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMotoristaComponent } from './crear-motorista/crear-motorista.component';
import { FacturaComponent } from './factura/factura.component';
import { InformesComponent } from './informes/informes.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PedidosDisponiblesComponent } from './pedidos-disponibles/pedidos-disponibles.component';
import { PedidosProgresoComponent } from './pedidos-progreso/pedidos-progreso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ActualizarMotoristaComponent } from './actualizar-motorista/actualizar-motorista.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'pedidosDisponibles', component: PedidosDisponiblesComponent},
  {path: 'pedidosProgreso', component: PedidosProgresoComponent},
  {path: 'crearMotorista', component: CrearMotoristaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'informes', component: InformesComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'actualizar', component: ActualizarMotoristaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

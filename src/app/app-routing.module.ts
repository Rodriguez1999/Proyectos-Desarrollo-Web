import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMotoristaComponent } from './crear-motorista/crear-motorista.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PedidosDisponiblesComponent } from './pedidos-disponibles/pedidos-disponibles.component';
import { PedidosProgresoComponent } from './pedidos-progreso/pedidos-progreso.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'pedidosDisponibles', component: PedidosDisponiblesComponent},
  {path: 'pedidosProgreso', component: PedidosProgresoComponent},
  {path: 'crearMotorista', component: CrearMotoristaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

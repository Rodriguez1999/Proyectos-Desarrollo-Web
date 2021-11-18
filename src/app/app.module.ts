import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CrearMotoristaComponent } from './crear-motorista/crear-motorista.component';
import { PedidosDisponiblesComponent } from './pedidos-disponibles/pedidos-disponibles.component';
import { PedidosProgresoComponent } from './pedidos-progreso/pedidos-progreso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MapaComponent } from './mapa/mapa.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    CrearMotoristaComponent,
    PedidosDisponiblesComponent,
    PedidosProgresoComponent,
    PerfilComponent,
    MapaComponent,
    InicioComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CrearMotoristaComponent } from './crear-motorista/crear-motorista.component';
import { PedidosDisponiblesComponent } from './pedidos-disponibles/pedidos-disponibles.component';
import { PedidosProgresoComponent } from './pedidos-progreso/pedidos-progreso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MapaComponent } from './mapa/mapa.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InformesComponent } from './informes/informes.component';
import { FacturaComponent } from './factura/factura.component';
import { ActualizarMotoristaComponent } from './actualizar-motorista/actualizar-motorista.component';

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
    LandingPageComponent,
    InformesComponent,
    FacturaComponent,
    ActualizarMotoristaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { Order } from 'src/app/interfaces/order';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-delivery-ubication',
  templateUrl: './delivery-ubication.component.html',
  styleUrls: ['./delivery-ubication.component.css'],
})
export class DeliveryUbicationComponent implements OnInit {
  userinfo = JSON.parse(<string>localStorage.getItem('user'));
  order: Order = {
    productsId: [],
    userId: this.userinfo._id,
    driverId: '',
    deliveryAddress: this.userinfo.address,
    lat: 14.1000704,
    long: -87.228416,
    status: 0,
    statusDetail: 'Disponible',
    observation: '',
    payment: false,
  };

  mapa!: Mapboxgl.Map;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.userinfo = JSON.parse(<string>localStorage.getItem('user'));
    this.order.productsId = JSON.parse(
      <string>localStorage.getItem('shop-cart')
    );
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-87.228416, 14.1000704],
      zoom: 12,
    });

    this.crearMarcador(-87.228416, 14.1000704);
    // controles de Zoom y rotacion del mapa
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    console.log(this.order);
  }

  crearMarcador(lng: number, ltd: number) {
    const marcador = new Mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, ltd])
      .addTo(this.mapa);

    marcador.on('drag', () => {
      console.log(marcador.getLngLat());
      this.order.lat = marcador.getLngLat()['lat'];
      this.order.long = marcador.getLngLat()['lng'];
      console.log(this.order.lat, this.order.long);
    });
  }

  printOrder() {
    localStorage.removeItem('shop-cart');
    let token = <string>localStorage.getItem('auth-token');
    console.log(token);
    console.log(this.order);
    let orderNew = this.order;
    this.companiesService
      .enviarOrden(orderNew, token)
      .subscribe(
        (result) => {
          alert('El pedido se ha realizado '+result._id);
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

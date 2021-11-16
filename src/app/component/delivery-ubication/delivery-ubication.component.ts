import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-delivery-ubication',
  templateUrl: './delivery-ubication.component.html',
  styleUrls: ['./delivery-ubication.component.css'],
})
export class DeliveryUbicationComponent implements OnInit {

  mapa!: Mapboxgl.Map;

  ngOnInit() {
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
  }

  crearMarcador(lng:number,ltd:number){
    const marcador = new Mapboxgl.Marker({
      draggable:true
    }).setLngLat([lng,ltd])
    .addTo(this.mapa);

    marcador.on('drag', ()=>{
      console.log(marcador.getLngLat());
    })
  }
}

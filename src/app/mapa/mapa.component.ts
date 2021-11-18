import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  mapa!: Mapboxgl.Map;

  constructor() { }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-87.2324035, 14.1070368], // starting position
    zoom: 16 // starting zoom
    });

    this.cargarMarcador(-87.2324035, 14.1070368);
  }

  cargarMarcador(lng: number, lat: number){
    const market = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng,lat])
    .addTo(this.mapa)
  }

}

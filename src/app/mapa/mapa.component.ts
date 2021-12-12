import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  mapa!: Mapboxgl.Map;
  coordenadas:any={};

  constructor(private ordenServicio:OrdenesService) { }

  ngOnInit() {
    this.coordenadas = this.ordenServicio.dibujarMapa();
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [this.coordenadas.long, this.coordenadas.lat], // starting position
    zoom: 14 // starting zoom
    });

    this.cargarMarcador(this.coordenadas.long, this.coordenadas.lat);
  }

  cargarMarcador(lng: number, lat: number){
    const market = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng,lat])
    .addTo(this.mapa)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['../../assets/img/card.jpg', '../../assets/img/perfil-2.jpg', '../../assets/img/perfil-2.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}

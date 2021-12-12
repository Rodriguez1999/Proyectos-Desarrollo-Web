import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() onVerOrdenesDisponibles = new EventEmitter();

  constructor(private usuarioServicios:UsuariosService) { }

  ngOnInit(): void {
  }

}

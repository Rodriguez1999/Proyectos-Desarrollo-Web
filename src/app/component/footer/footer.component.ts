import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class FooterComponent implements OnInit {
  cerrarShopCart = false;
  pago = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  reloadHome() {
    window.location.reload();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  cargarPago(value: any) {
    if (value == true) {
      this.cerrarShopCart = true;
    }
  }

  agregarDelivery(value: any) {
    if (value) {
      this.pago = true;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('auth-token');
    alert('Ha cerrado sesion, lo esperamos pronto');
    window.location.reload();
  }
}

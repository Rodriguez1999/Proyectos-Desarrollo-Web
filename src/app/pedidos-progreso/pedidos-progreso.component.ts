import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos-progreso',
  templateUrl: './pedidos-progreso.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./pedidos-progreso.component.css']
})
export class PedidosProgresoComponent implements OnInit {

  closeResult!: string;
  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  ngOnInit(): void {
  }

}

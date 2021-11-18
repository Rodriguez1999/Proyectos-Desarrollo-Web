import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos-disponibles',
  templateUrl: './pedidos-disponibles.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./pedidos-disponibles.component.css']
})
export class PedidosDisponiblesComponent implements OnInit {
  closeResult!: string;
  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  ngOnInit(): void {
  }

}

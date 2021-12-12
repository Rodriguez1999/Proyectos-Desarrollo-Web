import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cc-process',
  templateUrl: './cc-process.component.html',
  styleUrls: ['./cc-process.component.css']
})
export class CcProcessComponent implements OnInit {
  public isCollapsed = false;
  pago:string='Efectivo';

  @Output() payment = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  procesarPago(): void {
    this.payment.emit(this.pago);
  }

  formaPago(value:any): void {
      this.pago = value;
      console.log(this.pago);
  }
}

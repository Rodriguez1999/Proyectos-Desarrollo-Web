import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDisponiblesComponent } from './pedidos-disponibles.component';

describe('PedidosDisponiblesComponent', () => {
  let component: PedidosDisponiblesComponent;
  let fixture: ComponentFixture<PedidosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

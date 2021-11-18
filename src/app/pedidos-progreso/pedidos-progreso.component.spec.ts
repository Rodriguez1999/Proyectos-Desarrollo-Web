import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosProgresoComponent } from './pedidos-progreso.component';

describe('PedidosProgresoComponent', () => {
  let component: PedidosProgresoComponent;
  let fixture: ComponentFixture<PedidosProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosProgresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

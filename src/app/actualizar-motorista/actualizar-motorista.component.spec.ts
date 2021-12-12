import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMotoristaComponent } from './actualizar-motorista.component';

describe('ActualizarMotoristaComponent', () => {
  let component: ActualizarMotoristaComponent;
  let fixture: ComponentFixture<ActualizarMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMotoristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

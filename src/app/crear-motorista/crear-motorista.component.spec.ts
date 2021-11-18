import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMotoristaComponent } from './crear-motorista.component';

describe('CrearMotoristaComponent', () => {
  let component: CrearMotoristaComponent;
  let fixture: ComponentFixture<CrearMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMotoristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

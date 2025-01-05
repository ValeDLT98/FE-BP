import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMovimientoComponent } from './editar-movimiento.component';

describe('EditarMovimientoComponent', () => {
  let component: EditarMovimientoComponent;
  let fixture: ComponentFixture<EditarMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarMovimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDialogFormComponent } from './detalle-dialog-form.component';

describe('DetalleDialogFormComponent', () => {
  let component: DetalleDialogFormComponent;
  let fixture: ComponentFixture<DetalleDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

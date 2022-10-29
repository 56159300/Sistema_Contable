import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioMayorComponent } from './diario-mayor.component';

describe('DiarioMayorComponent', () => {
  let component: DiarioMayorComponent;
  let fixture: ComponentFixture<DiarioMayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiarioMayorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiarioMayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPatchComponent } from './servicios-patch.component';

describe('ServiciosPatchComponent', () => {
  let component: ServiciosPatchComponent;
  let fixture: ComponentFixture<ServiciosPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

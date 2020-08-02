import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2ProyeccionComponent } from './hijo2-proyeccion.component';

describe('Hijo2ProyeccionComponent', () => {
  let component: Hijo2ProyeccionComponent;
  let fixture: ComponentFixture<Hijo2ProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo2ProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo2ProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

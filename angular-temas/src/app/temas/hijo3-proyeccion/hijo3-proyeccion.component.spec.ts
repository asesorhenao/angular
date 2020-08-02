import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo3ProyeccionComponent } from './hijo3-proyeccion.component';

describe('Hijo3ProyeccionComponent', () => {
  let component: Hijo3ProyeccionComponent;
  let fixture: ComponentFixture<Hijo3ProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo3ProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo3ProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

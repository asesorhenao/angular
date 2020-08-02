import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPostComponent } from './servicio-post.component';

describe('ServicioPostComponent', () => {
  let component: ServicioPostComponent;
  let fixture: ComponentFixture<ServicioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

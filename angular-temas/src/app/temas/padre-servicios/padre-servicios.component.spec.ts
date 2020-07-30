import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreServiciosComponent } from './padre-servicios.component';

describe('PadreServiciosComponent', () => {
  let component: PadreServiciosComponent;
  let fixture: ComponentFixture<PadreServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

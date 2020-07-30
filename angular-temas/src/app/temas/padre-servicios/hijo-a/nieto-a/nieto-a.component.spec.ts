import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoAComponent } from './nieto-a.component';

describe('NietoAComponent', () => {
  let component: NietoAComponent;
  let fixture: ComponentFixture<NietoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

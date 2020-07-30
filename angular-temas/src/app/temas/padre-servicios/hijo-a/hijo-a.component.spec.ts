import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoAComponent } from './hijo-a.component';

describe('HijoAComponent', () => {
  let component: HijoAComponent;
  let fixture: ComponentFixture<HijoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

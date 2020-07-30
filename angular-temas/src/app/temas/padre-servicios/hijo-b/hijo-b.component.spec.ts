import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoBComponent } from './hijo-b.component';

describe('HijoBComponent', () => {
  let component: HijoBComponent;
  let fixture: ComponentFixture<HijoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

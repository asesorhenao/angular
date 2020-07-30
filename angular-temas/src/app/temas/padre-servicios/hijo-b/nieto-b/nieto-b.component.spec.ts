import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoBComponent } from './nieto-b.component';

describe('NietoBComponent', () => {
  let component: NietoBComponent;
  let fixture: ComponentFixture<NietoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

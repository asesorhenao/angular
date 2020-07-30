import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesReferenciaHijoComponent } from './variables-referencia-hijo.component';

describe('VariablesReferenciaHijoComponent', () => {
  let component: VariablesReferenciaHijoComponent;
  let fixture: ComponentFixture<VariablesReferenciaHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesReferenciaHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesReferenciaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesReferenciaComponent } from './variables-referencia.component';

describe('VariablesReferenciaComponent', () => {
  let component: VariablesReferenciaComponent;
  let fixture: ComponentFixture<VariablesReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

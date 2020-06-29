import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceguideCalculatorComponent } from './priceguide-calculator.component';

describe('PriceguideCalculatorComponent', () => {
  let component: PriceguideCalculatorComponent;
  let fixture: ComponentFixture<PriceguideCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceguideCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceguideCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

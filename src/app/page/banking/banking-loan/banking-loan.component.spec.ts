import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingLoanComponent } from './banking-loan.component';

describe('BankingLoanComponent', () => {
  let component: BankingLoanComponent;
  let fixture: ComponentFixture<BankingLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

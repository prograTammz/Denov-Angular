import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingTermsComponent } from './banking-terms.component';

describe('BankingTermsComponent', () => {
  let component: BankingTermsComponent;
  let fixture: ComponentFixture<BankingTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

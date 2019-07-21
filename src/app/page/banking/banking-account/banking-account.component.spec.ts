import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAccountComponent } from './banking-account.component';

describe('BankingAccountComponent', () => {
  let component: BankingAccountComponent;
  let fixture: ComponentFixture<BankingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

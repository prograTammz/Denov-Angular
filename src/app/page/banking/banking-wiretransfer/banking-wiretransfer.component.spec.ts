import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingWiretransferComponent } from './banking-wiretransfer.component';

describe('BankingWiretransferComponent', () => {
  let component: BankingWiretransferComponent;
  let fixture: ComponentFixture<BankingWiretransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingWiretransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingWiretransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFeesComponent } from './banking-fees.component';

describe('BankingFeesComponent', () => {
  let component: BankingFeesComponent;
  let fixture: ComponentFixture<BankingFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingPlansComponent } from './banking-plans.component';

describe('BankingPlansComponent', () => {
  let component: BankingPlansComponent;
  let fixture: ComponentFixture<BankingPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

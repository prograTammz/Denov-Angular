import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceguideDetailComponent } from './priceguide-detail.component';

describe('PriceguideDetailComponent', () => {
  let component: PriceguideDetailComponent;
  let fixture: ComponentFixture<PriceguideDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceguideDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceguideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

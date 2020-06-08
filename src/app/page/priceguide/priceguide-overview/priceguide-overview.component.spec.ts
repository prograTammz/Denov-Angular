import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceguideOverviewComponent } from './priceguide-overview.component';

describe('PriceguideOverviewComponent', () => {
  let component: PriceguideOverviewComponent;
  let fixture: ComponentFixture<PriceguideOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceguideOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceguideOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

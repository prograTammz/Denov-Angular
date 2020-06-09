import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceguideSearchComponent } from './priceguide-search.component';

describe('PriceguideSearchComponent', () => {
  let component: PriceguideSearchComponent;
  let fixture: ComponentFixture<PriceguideSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceguideSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceguideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

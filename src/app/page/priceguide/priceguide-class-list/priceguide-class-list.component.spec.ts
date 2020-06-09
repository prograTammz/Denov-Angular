import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceguideClassListComponent } from './priceguide-class-list.component';

describe('PriceguideClassListComponent', () => {
  let component: PriceguideClassListComponent;
  let fixture: ComponentFixture<PriceguideClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceguideClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceguideClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

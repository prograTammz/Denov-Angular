import { TestBed } from '@angular/core/testing';

import { PriceguideService } from './priceguide.service';

describe('PriceguideService', () => {
  let service: PriceguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceguideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

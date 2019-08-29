import { TestBed } from '@angular/core/testing';

import { JoinTableService } from './join-table.service';

describe('JoinTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinTableService = TestBed.get(JoinTableService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InstallDialogService } from './install-dialog.service';

describe('InstallDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallDialogService = TestBed.get(InstallDialogService);
    expect(service).toBeTruthy();
  });
});

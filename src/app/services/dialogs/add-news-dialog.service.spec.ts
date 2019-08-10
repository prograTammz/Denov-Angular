import { TestBed } from '@angular/core/testing';

import { AddNewsDialogService } from './add-news-dialog.service';

describe('AddNewsDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewsDialogService = TestBed.get(AddNewsDialogService);
    expect(service).toBeTruthy();
  });
});

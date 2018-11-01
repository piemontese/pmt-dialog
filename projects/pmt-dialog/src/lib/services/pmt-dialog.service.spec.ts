import { TestBed, inject } from '@angular/core/testing';

import { PmtDialogService } from './pmt-dialog.service';

describe('PmtDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmtDialogService]
    });
  });

  it('should be created', inject([PmtDialogService], (service: PmtDialogService) => {
    expect(service).toBeTruthy();
  }));
});

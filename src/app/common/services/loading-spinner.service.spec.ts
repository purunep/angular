import { TestBed, inject } from '@angular/core/testing';

import { LoadingSpinnerService } from './loading-spinner.service';

describe('LoadingSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingSpinnerService]
    });
  });

  it('should ...', inject([LoadingSpinnerService], (service: LoadingSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});

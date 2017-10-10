import { TestBed, inject } from '@angular/core/testing';

import { DisplayPlaidAccountService } from './display-plaid-account.service';

describe('DisplayPlaidAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayPlaidAccountService]
    });
  });

  it('should be created', inject([DisplayPlaidAccountService], (service: DisplayPlaidAccountService) => {
    expect(service).toBeTruthy();
  }));
});

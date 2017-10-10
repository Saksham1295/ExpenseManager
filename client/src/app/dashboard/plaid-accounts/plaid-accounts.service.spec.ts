import { TestBed, inject } from '@angular/core/testing';

import { PlaidAccountsService } from './plaid-accounts.service';

describe('PlaidAccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaidAccountsService]
    });
  });

  it('should be created', inject([PlaidAccountsService], (service: PlaidAccountsService) => {
    expect(service).toBeTruthy();
  }));
});

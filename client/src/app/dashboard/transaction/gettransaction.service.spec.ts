import { TestBed, inject } from '@angular/core/testing';

import { GettransactionService } from './gettransaction.service';

describe('GettransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettransactionService]
    });
  });

  it('should be created', inject([GettransactionService], (service: GettransactionService) => {
    expect(service).toBeTruthy();
  }));
});

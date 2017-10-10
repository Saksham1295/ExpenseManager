import { TestBed, inject } from '@angular/core/testing';

import { AddTransactionService } from './add-transaction.service';

describe('AddTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTransactionService]
    });
  });

  it('should be created', inject([AddTransactionService], (service: AddTransactionService) => {
    expect(service).toBeTruthy();
  }));
});

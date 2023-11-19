import { TestBed } from '@angular/core/testing';

import { QuotationService } from './quotation.service';

describe('QuotationServiceService', () => {
  let service: QuotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

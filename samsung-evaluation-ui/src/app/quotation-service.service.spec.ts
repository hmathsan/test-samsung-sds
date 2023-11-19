import { TestBed } from '@angular/core/testing';

import { QuotationServiceService } from './quotation-service.service';

describe('QuotationServiceService', () => {
  let service: QuotationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TcProductCompareService } from './tc-product-compare.service';

describe('TcReferredCustomerService', () => {
  let service: TcProductCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcProductCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

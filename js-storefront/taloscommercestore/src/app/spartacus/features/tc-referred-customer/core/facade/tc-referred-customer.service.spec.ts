import { TestBed } from '@angular/core/testing';

import { TcReferredCustomerService } from './tc-referred-customer.service';

describe('TcReferredCustomerService', () => {
  let service: TcReferredCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcReferredCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

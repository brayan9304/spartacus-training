import { TestBed } from '@angular/core/testing';

import { TcCartStateService } from './tc-cart-state.service';

describe('TcCartStateService', () => {
  let service: TcCartStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcCartStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

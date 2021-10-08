import { TestBed } from '@angular/core/testing';

import { TcSavedListService } from './tc-saved-list.service';

describe('TcSavedListService', () => {
  let service: TcSavedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcSavedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

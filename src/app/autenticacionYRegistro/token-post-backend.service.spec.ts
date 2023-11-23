import { TestBed } from '@angular/core/testing';

import { TokenPostBackendService } from './token-post-backend.service';

describe('TokenPostBackendService', () => {
  let service: TokenPostBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenPostBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

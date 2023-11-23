import { TestBed } from '@angular/core/testing';

import { RecomendarListaService } from './recomendar-lista.service';

describe('RecomendarListaService', () => {
  let service: RecomendarListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendarListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

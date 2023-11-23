import { TestBed } from '@angular/core/testing';

import { GeneroListaService } from './genero-lista.service';

describe('GeneroListaService', () => {
  let service: GeneroListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

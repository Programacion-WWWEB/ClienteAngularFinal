import { TestBed } from '@angular/core/testing';

import { VotoListaService } from './voto-lista.service';

describe('VotoListaService', () => {
  let service: VotoListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotoListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UsuarioVotanteService } from './usuario-votante.service';

describe('UsuarioVotanteService', () => {
  let service: UsuarioVotanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioVotanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

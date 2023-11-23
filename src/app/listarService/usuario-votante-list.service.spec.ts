import { TestBed } from '@angular/core/testing';

import { UsuarioVotanteListService } from './usuario-votante-list.service';

describe('UsuarioVotanteListService', () => {
  let service: UsuarioVotanteListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioVotanteListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

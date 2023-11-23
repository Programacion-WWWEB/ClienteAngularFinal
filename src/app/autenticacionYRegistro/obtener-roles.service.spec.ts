import { TestBed } from '@angular/core/testing';

import { ObtenerRolesService } from './obtener-roles.service';

describe('ObtenerRolesService', () => {
  let service: ObtenerRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

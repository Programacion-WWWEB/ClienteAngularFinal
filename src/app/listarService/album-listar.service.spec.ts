import { TestBed } from '@angular/core/testing';

import { AlbumListarService } from './album-listar.service';

describe('AlbumListarService', () => {
  let service: AlbumListarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumListarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

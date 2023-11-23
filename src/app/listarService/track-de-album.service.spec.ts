import { TestBed } from '@angular/core/testing';

import { TrackDeAlbumService } from './track-de-album.service';

describe('TrackDeAlbumService', () => {
  let service: TrackDeAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackDeAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

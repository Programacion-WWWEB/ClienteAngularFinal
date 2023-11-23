import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDeAlbumComponent } from './track-de-album.component';

describe('TrackDeAlbumComponent', () => {
  let component: TrackDeAlbumComponent;
  let fixture: ComponentFixture<TrackDeAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackDeAlbumComponent]
    });
    fixture = TestBed.createComponent(TrackDeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

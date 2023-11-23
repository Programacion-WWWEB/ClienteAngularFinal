import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEnAlbumListarComponent } from './track-en-album-listar.component';

describe('TrackEnAlbumListarComponent', () => {
  let component: TrackEnAlbumListarComponent;
  let fixture: ComponentFixture<TrackEnAlbumListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackEnAlbumListarComponent]
    });
    fixture = TestBed.createComponent(TrackEnAlbumListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAlbumComponent } from './select-album.component';

describe('SelectAlbumComponent', () => {
  let component: SelectAlbumComponent;
  let fixture: ComponentFixture<SelectAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAlbumComponent]
    });
    fixture = TestBed.createComponent(SelectAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

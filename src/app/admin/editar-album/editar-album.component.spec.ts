import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlbumComponent } from './editar-album.component';

describe('EditarAlbumComponent', () => {
  let component: EditarAlbumComponent;
  let fixture: ComponentFixture<EditarAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAlbumComponent]
    });
    fixture = TestBed.createComponent(EditarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

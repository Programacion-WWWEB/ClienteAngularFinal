import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClienteAlbumComponent } from './menu-cliente-album.component';

describe('MenuClienteAlbumComponent', () => {
  let component: MenuClienteAlbumComponent;
  let fixture: ComponentFixture<MenuClienteAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClienteAlbumComponent]
    });
    fixture = TestBed.createComponent(MenuClienteAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

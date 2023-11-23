import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdminAlbumComponent } from './menu-admin-album.component';

describe('MenuAdminAlbumComponent', () => {
  let component: MenuAdminAlbumComponent;
  let fixture: ComponentFixture<MenuAdminAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAdminAlbumComponent]
    });
    fixture = TestBed.createComponent(MenuAdminAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

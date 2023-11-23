import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListarAdminComponent } from './album-listar-admin.component';

describe('AlbumListarAdminComponent', () => {
  let component: AlbumListarAdminComponent;
  let fixture: ComponentFixture<AlbumListarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumListarAdminComponent]
    });
    fixture = TestBed.createComponent(AlbumListarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

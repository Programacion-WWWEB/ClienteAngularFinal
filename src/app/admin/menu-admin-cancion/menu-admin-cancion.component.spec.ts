import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdminCancionComponent } from './menu-admin-cancion.component';

describe('MenuAdminCancionComponent', () => {
  let component: MenuAdminCancionComponent;
  let fixture: ComponentFixture<MenuAdminCancionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAdminCancionComponent]
    });
    fixture = TestBed.createComponent(MenuAdminCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

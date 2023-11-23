import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdminGeneroComponent } from './menu-admin-genero.component';

describe('MenuAdminGeneroComponent', () => {
  let component: MenuAdminGeneroComponent;
  let fixture: ComponentFixture<MenuAdminGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAdminGeneroComponent]
    });
    fixture = TestBed.createComponent(MenuAdminGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

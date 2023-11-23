import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClienteCancionComponent } from './menu-cliente-cancion.component';

describe('MenuClienteCancionComponent', () => {
  let component: MenuClienteCancionComponent;
  let fixture: ComponentFixture<MenuClienteCancionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClienteCancionComponent]
    });
    fixture = TestBed.createComponent(MenuClienteCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

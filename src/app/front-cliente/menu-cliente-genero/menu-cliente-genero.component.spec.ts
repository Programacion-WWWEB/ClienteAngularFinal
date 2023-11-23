import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClienteGeneroComponent } from './menu-cliente-genero.component';

describe('MenuClienteGeneroComponent', () => {
  let component: MenuClienteGeneroComponent;
  let fixture: ComponentFixture<MenuClienteGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClienteGeneroComponent]
    });
    fixture = TestBed.createComponent(MenuClienteGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

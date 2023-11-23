import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClienteCancionDetalleComponent } from './menu-cliente-cancion-detalle.component';

describe('MenuClienteCancionDetalleComponent', () => {
  let component: MenuClienteCancionDetalleComponent;
  let fixture: ComponentFixture<MenuClienteCancionDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClienteCancionDetalleComponent]
    });
    fixture = TestBed.createComponent(MenuClienteCancionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

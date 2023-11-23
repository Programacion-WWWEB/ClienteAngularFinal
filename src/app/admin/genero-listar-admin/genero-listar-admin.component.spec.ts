import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroListarAdminComponent } from './genero-listar-admin.component';

describe('GeneroListarAdminComponent', () => {
  let component: GeneroListarAdminComponent;
  let fixture: ComponentFixture<GeneroListarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneroListarAdminComponent]
    });
    fixture = TestBed.createComponent(GeneroListarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

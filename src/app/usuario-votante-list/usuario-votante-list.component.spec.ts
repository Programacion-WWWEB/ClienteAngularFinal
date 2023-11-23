import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioVotanteListComponent } from './usuario-votante-list.component';

describe('UsuarioVotanteListComponent', () => {
  let component: UsuarioVotanteListComponent;
  let fixture: ComponentFixture<UsuarioVotanteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioVotanteListComponent]
    });
    fixture = TestBed.createComponent(UsuarioVotanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

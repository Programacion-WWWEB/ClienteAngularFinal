import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroListaComponent } from './genero-lista.component';

describe('GeneroListaComponent', () => {
  let component: GeneroListaComponent;
  let fixture: ComponentFixture<GeneroListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneroListaComponent]
    });
    fixture = TestBed.createComponent(GeneroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

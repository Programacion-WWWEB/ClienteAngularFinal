import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoListaComponent } from './voto-lista.component';

describe('VotoListaComponent', () => {
  let component: VotoListaComponent;
  let fixture: ComponentFixture<VotoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotoListaComponent]
    });
    fixture = TestBed.createComponent(VotoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

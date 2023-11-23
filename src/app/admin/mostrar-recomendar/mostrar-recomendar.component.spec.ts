import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRecomendarComponent } from './mostrar-recomendar.component';

describe('MostrarRecomendarComponent', () => {
  let component: MostrarRecomendarComponent;
  let fixture: ComponentFixture<MostrarRecomendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarRecomendarComponent]
    });
    fixture = TestBed.createComponent(MostrarRecomendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendarListaComponent } from './recomendar-lista.component';

describe('RecomendarListaComponent', () => {
  let component: RecomendarListaComponent;
  let fixture: ComponentFixture<RecomendarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendarListaComponent]
    });
    fixture = TestBed.createComponent(RecomendarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

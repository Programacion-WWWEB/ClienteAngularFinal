import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionListarComponent } from './cancion-listar.component';

describe('CancionListarComponent', () => {
  let component: CancionListarComponent;
  let fixture: ComponentFixture<CancionListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancionListarComponent]
    });
    fixture = TestBed.createComponent(CancionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

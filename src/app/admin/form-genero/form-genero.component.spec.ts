import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneroComponent } from './form-genero.component';

describe('FormGeneroComponent', () => {
  let component: FormGeneroComponent;
  let fixture: ComponentFixture<FormGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGeneroComponent]
    });
    fixture = TestBed.createComponent(FormGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

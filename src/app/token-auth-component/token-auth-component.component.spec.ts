import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAuthComponentComponent } from './token-auth-component.component';

describe('TokenAuthComponentComponent', () => {
  let component: TokenAuthComponentComponent;
  let fixture: ComponentFixture<TokenAuthComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenAuthComponentComponent]
    });
    fixture = TestBed.createComponent(TokenAuthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

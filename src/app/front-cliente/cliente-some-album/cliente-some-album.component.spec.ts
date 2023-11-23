import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSomeAlbumComponent } from './cliente-some-album.component';

describe('ClienteSomeAlbumComponent', () => {
  let component: ClienteSomeAlbumComponent;
  let fixture: ComponentFixture<ClienteSomeAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteSomeAlbumComponent]
    });
    fixture = TestBed.createComponent(ClienteSomeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

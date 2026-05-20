import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsFormComponent } from './playlists-form-component';

describe('PlaylistsFormComponent', () => {
  let component: PlaylistsFormComponent;
  let fixture: ComponentFixture<PlaylistsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

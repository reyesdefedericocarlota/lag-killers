import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsDetailComponent } from './playlists-detail-component';

describe('PlaylistsDetailComponent', () => {
  let component: PlaylistsDetailComponent;
  let fixture: ComponentFixture<PlaylistsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

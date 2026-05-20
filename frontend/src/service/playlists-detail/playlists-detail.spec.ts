import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsDetail } from './playlists-detail';

describe('PlaylistsDetail', () => {
  let component: PlaylistsDetail;
  let fixture: ComponentFixture<PlaylistsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

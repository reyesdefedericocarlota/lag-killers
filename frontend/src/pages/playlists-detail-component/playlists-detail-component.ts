import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetailComponent implements OnInit {
  playlist = signal<any>(null);

  constructor(
    private route: ActivatedRoute,
    private service: PlaylistService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getById(id!).subscribe((data) => {
      this.playlist.set(data);
    });
  }
}

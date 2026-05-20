import { Component, signal, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
})
export class PlaylistsComponent implements OnInit {
  playlists = signal<any[]>([]);

  constructor(private service: PlaylistService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.playlists.set(data);
    });
  }
}

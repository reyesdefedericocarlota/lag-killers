import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlists.component.html',
})
export class PlaylistsComponent {
  playlists = toSignal(this.service.getAll(), { initialValue: [] });

  constructor(private service: PlaylistService) {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist-detail.component.html',
})
export class PlaylistDetailComponent {
  playlist = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (!id) throw new Error('ID inválido');
        return this.service.getById(id);
      }),
    ),
    { initialValue: null },
  );

  constructor(
    private route: ActivatedRoute,
    private service: PlaylistService,
  ) {}
}

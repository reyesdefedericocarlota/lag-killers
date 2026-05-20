import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule], // <-- CLAVE PARA LOS *ngIf y *ngFor
  templateUrl: './playlists-detail-component.html',
  styleUrls: ['./playlists-detail-component.css']

})
export class PlaylistDetailComponent implements OnInit {
  playlist = signal<any>(null);

  constructor(
    private route: ActivatedRoute,
    private service: PlaylistService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

   this.service.getById(Number(id!)).subscribe((data: any) => {
      this.playlist.set(data);
    });
  }
}

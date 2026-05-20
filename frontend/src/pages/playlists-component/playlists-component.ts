import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaylistService } from '../../services/playlist';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './playlists-component.html',
  styleUrls: ['./playlists-component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists = signal<any[]>([]);

  constructor(private service: PlaylistService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data: any) => {
      this.playlists.set(data);
    });
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent {
  // 🔥 RÚBRICA: Uso de SIGNALS para manejar estado
  playlistSeleccionada = signal<any>(null);

  // RÚBRICA: Simulamos la relación 1:M (1 Playlist -> Muchas Canciones)
  listaPlaylists = [
    {
      id: 1,
      nombre: 'Top Hits 2026',
      creador: 'Carlos Martín',
      canciones: [
        { titulo: 'Blinding Lights', artista: 'The Weeknd' },
        { titulo: 'Starboy', artista: 'The Weeknd' }
      ]
    },
    {
      id: 2,
      nombre: 'Programando en Angular',
      creador: 'Ana Belén',
      canciones: [
        { titulo: 'Lofi Hip Hop', artista: 'Lofi Girl' },
        { titulo: 'Chill Vibes', artista: 'Chillwave' }
      ]
    }
  ];

  verDetalle(playlist: any) {
    // Actualizamos el valor del Signal al hacer clic en una playlist
    this.playlistSeleccionada.set(playlist);
  }
}

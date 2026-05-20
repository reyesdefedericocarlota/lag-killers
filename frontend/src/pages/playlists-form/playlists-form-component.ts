import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './playlist-form.component.html',
})
export class PlaylistFormComponent {
  form = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    portada: [''],
  });

  constructor(
    private fb: FormBuilder,
    private service: PlaylistService,
    private router: Router,
  ) {}

  crear() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.service.create(this.form.getRawValue()).subscribe({
      next: () => {
        alert('Playlist creada 🎵');
        this.router.navigate(['/playlists']);
      },
      error: (err) => {
        console.error('Error al crear playlist:', err);
        alert('Error al crear la playlist');
      },
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaylistService } from '../../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
})
export class PlaylistFormComponent {
  constructor(
    private fb: FormBuilder,
    private service: PlaylistService,
    private router: Router,
  ) {}

  form = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    portada: [''],
  });

  crear() {
    if (this.form.invalid) return;

    this.service.create(this.form.value).subscribe(() => {
      alert('Playlist creada 🎵');
      this.router.navigate(['/playlists']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlaylistService } from '../../services/playlist'; // La conexión con el servicio

@Component({
  selector: 'app-playlist-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './playlists-form-component.html',
  styleUrls: ['./playlists-form-component.css']
})
export class PlaylistFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });
  }

crear(): void {
    if (this.form.valid) {
      console.log('Guardando...', this.form.value);
    }
  }
}

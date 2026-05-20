import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './canciones.html',
  styleUrls: ['./canciones.css']
})
export class CancionesComponent implements OnInit {
  cancionForm!: FormGroup;

  listaCanciones = [
    { id: 1, titulo: 'Blinding Lights', artista: 'The Weeknd', duracion: '3:20' },
    { id: 2, titulo: 'Starboy', artista: 'The Weeknd', duracion: '3:50' },
    { id: 3, titulo: 'Save Your Tears', artista: 'The Weeknd', duracion: '3:35' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cancionForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      artista: ['', [Validators.required]],
      duracion: ['', [Validators.required, Validators.pattern('^[0-9]+:[0-5][0-9]$')]]
    });
  }

  guardarCancion(): void {
    if (this.cancionForm.valid) {
      const nuevaCancion = {
        id: this.listaCanciones.length + 1,
        ...this.cancionForm.value
      };
      this.listaCanciones.push(nuevaCancion);
      this.cancionForm.reset();
    } else {
      alert('Por favor, rellena todos los campos correctamente.');
    }
  }
}

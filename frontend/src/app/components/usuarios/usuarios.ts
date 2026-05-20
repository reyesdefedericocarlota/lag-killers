import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule], // <-- Faltaba esto
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class Usuarios {
  listaUsuarios = [
    { id: 1, nombre: 'Carlos Martín', email: 'carlos@mail.com', rol: 'Administrador' }
  ];
}

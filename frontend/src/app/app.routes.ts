import { Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones';
import { Usuarios } from './components/usuarios/usuarios';

// Las 3 líneas corregidas de Borja:
import { PlaylistsComponent } from '../pages/playlists-component/playlists-component';
import { PlaylistFormComponent } from '../pages/playlists-form-component/playlists-form-component';
import { PlaylistDetailComponent } from '../pages/playlists-detail-component/playlists-detail-component';

export const routes: Routes = [
  { path: 'canciones', component: CancionesComponent },
  { path: 'usuarios', component: Usuarios },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlists/nueva', component: PlaylistFormComponent },
  { path: 'playlists/:id', component: PlaylistDetailComponent },
  { path: '', redirectTo: '/canciones', pathMatch: 'full' },
  { path: '**', redirectTo: '/canciones' }
];

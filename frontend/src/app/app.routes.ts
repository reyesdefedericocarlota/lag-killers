import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'playlists', pathMatch: 'full' },

  {
    path: 'playlists',
    loadComponent: () =>
      import('./pages/playlists/playlists.component').then((m) => m.PlaylistsComponent),
  },
  {
    path: 'playlists/nueva',
    loadComponent: () =>
      import('./pages/playlist-form/playlist-form.component').then((m) => m.PlaylistFormComponent),
  },
  {
    path: 'playlists/:id',
    loadComponent: () =>
      import('./pages/playlist-detail/playlist-detail.component').then(
        (m) => m.PlaylistDetailComponent,
      ),
  },
];

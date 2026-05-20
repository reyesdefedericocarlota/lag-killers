import { Routes } from '@angular/router';
import{PlaylistsComponent} from '.pages/playlists/playlists.component';
import{PlaylistFormComponent} from '.pages/playlist-form/playlist-form.component';
import{PlaylistDetailComponent} from '.pages/playlist-detail/playlist-detail.component';
export const routes: Routes = [
  { path: '', redirectTo: 'playlists', pathMatch: 'full' },

  { path: 'playlists', component: PlaylistsComponent },

  { path: 'playlists/nueva', component: PlaylistFormComponent },

  { path: 'playlists/:id', component: PlaylistDetailComponent },
];

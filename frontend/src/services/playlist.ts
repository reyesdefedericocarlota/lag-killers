import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiUrl = 'http://localhost:8080/playlists';

  constructor(private http: HttpClient) {}


  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }


  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  create(playlist: any) {
    return this.http.post(this.apiUrl, playlist);
  }


  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

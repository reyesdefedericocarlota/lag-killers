package com.lagkillers.backend.controller;

import com.lagkillers.backend.service.PlaylistService;
import com.lagkillers.backend.model.Playlist;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/playlists")
public class PlaylistController {

    private final PlaylistService playlistService;

    public PlaylistController(PlaylistService playlistService) {
        this.playlistService = playlistService;
    }

    @GetMapping
    public List<Playlist> getAllPlaylists() {
        return playlistService.getPlaylists();
    }

    @GetMapping("/{id}")
    public Playlist getPlaylistById(@PathVariable Long id) {
        return playlistService.getPlaylistById(id);
    }

    @PutMapping("/{id}")
    public Playlist updatePlaylist(@PathVariable Long id, @RequestBody Playlist playlist) {
        return playlistService.updatePlaylist(id, playlist);
    }

    @GetMapping("/user/{id}")
    public List<Playlist> getPlaylistsByUser(@PathVariable Long id) {
        return playlistService.getPlaylistsByUser(id);
    }

    @PostMapping
    public Playlist createPlaylist(@RequestBody Playlist playlist) {
        return playlistService.createPlaylist(playlist);
    }

    @DeleteMapping("/{id}")
    public void deletePlaylist(@PathVariable Long id) {
        playlistService.deletePlaylist(id);
    }
}

package com.lagkillers.backend.controller;

import com.lagkillers.backend.service.SongService;
import com.lagkillers.backend.model.Song;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/songs")
public class SongController {

    private final SongService songService;

    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping
    public List<Song> getAllSongs() {
        return songService.getSongs();
    }

    @GetMapping("/playlist/{id}")
    public List<Song> getSongsByPlaylist(@PathVariable Long id) {
        return songService.getSongsByPlaylist(id);
    }

    @PostMapping
    public Song createSong(@RequestBody Song song) {
        return songService.createSong(song);
    }

    @DeleteMapping("/{id}")
    public void deleteSong(@PathVariable Long id) {
        songService.deleteSong(id);
    }
}

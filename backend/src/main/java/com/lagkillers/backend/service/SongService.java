package com.lagkillers.backend.service;

import com.lagkillers.backend.model.Song;
import com.lagkillers.backend.repository.SongRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {

    private final SongRepository songRepository;

    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public List<Song> getSongs() {
        return songRepository.findAll();
    }

    public List<Song> getSongsByPlaylist(Long playlistId) {
        return songRepository.findByPlaylistsId(playlistId);
    }

    public Song createSong(Song song) {
        return songRepository.save(song);
    }

    public void deleteSong(Long id) {
        songRepository.deleteById(id);
    }
}
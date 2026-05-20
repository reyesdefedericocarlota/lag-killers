package com.lagkillers.backend.service;

import com.lagkillers.backend.model.Playlist;
import com.lagkillers.backend.repository.PlaylistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaylistService {

    private final PlaylistRepository playlistRepository;

    public PlaylistService(PlaylistRepository playlistRepository) {
        this.playlistRepository = playlistRepository;
    }

    public List<Playlist> getPlaylists() {
        return playlistRepository.findAll();
    }

    public Playlist createPlaylist(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    public void deletePlaylist(Long id) {
        playlistRepository.deleteById(id);
    }
}
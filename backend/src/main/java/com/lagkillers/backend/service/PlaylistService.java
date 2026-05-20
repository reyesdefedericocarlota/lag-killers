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

    public Playlist getPlaylistById(Long id) {
        return playlistRepository.findById(id).orElse(null);
    }

    public Playlist updatePlaylist(Long id, Playlist updatedPlaylist) {

        Playlist playlist = playlistRepository.findById(id).orElse(null);

        if (playlist != null) {
            playlist.setName(updatedPlaylist.getName());
            playlist.setDescription(updatedPlaylist.getDescription());
            playlist.setCreatedAt(updatedPlaylist.getCreatedAt());
            playlist.setSongs(updatedPlaylist.getSongs());

            return playlistRepository.save(playlist);
        }

        return null;
    }

    public List<Playlist> getPlaylistsByUser(Long userId) {
        return playlistRepository.findByUserId(userId);
    }

    public Playlist createPlaylist(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    public void deletePlaylist(Long id) {
        playlistRepository.deleteById(id);
    }
}
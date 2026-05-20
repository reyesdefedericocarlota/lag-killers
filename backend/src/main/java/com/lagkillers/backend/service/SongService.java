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

    public Song getSongById(Long id) {
        return songRepository.findById(id).orElse(null);
    }

    public Song updateSong(Long id, Song updatedSong) {

        Song song = songRepository.findById(id).orElse(null);

        if (song != null) {
            song.setTitle(updatedSong.getTitle());
            song.setArtist(updatedSong.getArtist());
            song.setGenre(updatedSong.getGenre());
            song.setDuration(updatedSong.getDuration());
            song.setReleaseYear(updatedSong.getReleaseYear());

            return songRepository.save(song);
        }

        return null;
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
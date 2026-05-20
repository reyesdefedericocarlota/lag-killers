package com.lagkillers.backend.repository;

import com.lagkillers.backend.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long> {

    List<Song> findByPlaylistsId(Long playlistId);
}
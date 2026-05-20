package com.lagkillers.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "songs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String artist;

    private String genre;

    private Integer duration;

    private Integer releaseYear;

    @ManyToMany(mappedBy = "songs")
    @JsonBackReference
    private List<Playlist> playlists;
}

-- Insert de los Usuarios

INSERT INTO users (username, email, birth_date) VALUES
('juan_music', 'juan@example.com', '1998-05-14'),
('ana_rock', 'ana@example.com', '2000-11-22'),
('carlos_pop', 'carlos@example.com', '1995-03-08'),
('lucia_jazz', 'lucia@example.com', '1999-07-30'),
('mario_mix', 'mario@example.com', '1997-12-01');

-- Insert de las Canciones

INSERT INTO songs (title, artist, genre, duration, release_year) VALUES
('Blinding Lights', 'The Weeknd', 'Pop', 200, 2019),
('Bohemian Rhapsody', 'Queen', 'Rock', 354, 1975),
('Take Five', 'Dave Brubeck', 'Jazz', 324, 1959),
('Shape of You', 'Ed Sheeran', 'Pop', 240, 2017),
('Smells Like Teen Spirit', 'Nirvana', 'Grunge', 301, 1991);

-- Insert de las Playlists

INSERT INTO playlists (name, description, created_at, user_id) VALUES
('Pop Hits', 'Las mejores canciones pop', '2026-05-20', 1),
('Rock Classics', 'Clásicos del rock', '2026-05-20', 2),
('Jazz Vibes', 'Relajación con jazz', '2026-05-20', 4),
('Workout Mix', 'Música para entrenar', '2026-05-20', 5),
('Chill Nights', 'Canciones tranquilas para la noche', '2026-05-20', 3);

-- Insert de la relación muchos a muchos.

INSERT INTO playlist_songs (playlist_id, song_id) VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 5),
(3, 3);
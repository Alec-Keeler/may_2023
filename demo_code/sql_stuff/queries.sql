SELECT *
FROM albums;

SELECT title, artist_name FROM albums;

SELECT title, artist_name FROM albums
WHERE id = 1;

SELECT * FROM albums
WHERE release_year <= 2000;

SELECT * FROM albums
WHERE release_year > 2000 OR num_songs > 12;

DELETE FROM albums;

DELETE FROM albums
WHERE release_year > 2000;

UPDATE albums
SET release_year = 2009
WHERE id = 1;

UPDATE albums
SET num_songs = num_songs + 1;

SELECT * FROM albums
WHERE release_year >= 2000 AND release_year <= 2015;

SELECT * FROM albums
WHERE release_year BETWEEN 2000 AND 2015;

SELECT * FROM albums
WHERE group_id IN (2, 4);

SELECT * FROM albums
WHERE title LIKE '%Hundred%';

SELECT * FROM albums
WHERE title LIKE 'f%';

SELECT * FROM albums
ORDER BY group_id, length;

SELECT * FROM albums
ORDER BY title DESC
LIMIT 3;

SELECT * FROM albums
ORDER BY title DESC
LIMIT 3
OFFSET 3;

SELECT title, (release_year + 2) AS new_release_yr FROM albums;

SELECT * FROM groups
JOIN albums ON (groups.id = albums.group_id)
WHERE group_id = 2;

SELECT songs.title, songs.album_id, albums.id, albums.title FROM albums
JOIN songs ON (songs.album_id = albums.id);

SELECT groups.name, groups.id, albums.group_id, albums.title, albums.id, songs.album_id, songs.title 
FROM songs
JOIN albums ON (albums.id = songs.album_id)
JOIN groups ON (groups.id = albums.group_id)
WHERE songs.length < 4
ORDER BY songs.title
LIMIT 2;


-- Query for a group, their albums, those albums' songs, and those songs' genres
SELECT groups.name, groups.id, albums.group_id, albums.title, albums.id, songs.album_id, songs.title, genres.name
FROM groups
JOIN albums ON (groups.id = albums.group_id)
JOIN songs ON (albums.id = songs.album_id)
JOIN song_genres ON (songs.id = song_genres.song_id)
JOIN genres ON (song_genres.genre_id = genres.id)
WHERE groups.id = 1;


-- SELECT groups.name, groups.id, albums.group_id, albums.title, albums.id, songs.album_id, songs.title, genres.name
-- FROM songs
-- JOIN albums
-- JOIN groups
-- JOIN song_genres
-- JOIN genres
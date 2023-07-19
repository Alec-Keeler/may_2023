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
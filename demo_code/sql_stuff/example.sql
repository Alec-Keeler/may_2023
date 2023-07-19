DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR NOT NULL,
	release_year INTEGER NOT NULL,
	artist_name VARCHAR(100) NOT NULL,
	length DECIMAL(5,2) NOT NULL,
	num_songs INTEGER NOT NULL
);

INSERT INTO albums (title, release_year, artist_name, length, num_songs)
VALUES
('A Hundred Million Suns', 2008, 'Snow Patrol', 58.25, 11),
('Fogerty''s Cove', 1977, 'Stan Rogers', 39.5, 12),
('Geography', 2018, 'Tom Misch', 52.33, 13),
('Worlds', 2014, 'Porter Robinson', 57.82, 12),
('Moosetape', 2021, 'Sidhu Moosewala', 97.00, 32),
('American Beauty', 1970, 'The Grateful Dead', 42.21, 10),
('Chet Baker Sings', 1956, 'Chet Baker', 44.21, 14),
('Hot Rats', 1969, 'Frank Zappa', 43.11, 6),
('FEELS', 2017, 'Snoh Aalegra', 41.30, 13),
('Rift', 1993, 'Phish', 67.44, 14),
('5 Years of mau5', 2014, 'deadmau5', 134.12, 25);
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS songs;

CREATE TABLE albums (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR NOT NULL,
	release_year INTEGER NOT NULL,
	length DECIMAL(5,2) NOT NULL,
	group_id INTEGER REFERENCES groups(id)
);


CREATE TABLE groups (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(200) NOT NULL,
	num_followers INTEGER
);

CREATE TABLE songs (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR(200) NOT NULL,
	release_year INTEGER NOT NULL,
	length DECIMAL(5,2),
	song_order INTEGER,
	single BOOLEAN DEFAULT false,
	-- album_id INTEGER,
	-- FOREIGN KEY (album_id) REFERENCES albums(id)
	album_id INTEGER REFERENCES albums(id)
);

-- INSERT INTO albums (title, release_year, length, group_id)
-- VALUES
-- ('A Hundred Million Suns', 2008, 58.25, 2),
-- ('Fogerty''s Cove', 1977, 39.5, 1),
-- ('Geography', 2018, 52.33, )3,
-- ('Worlds', 2014, 57.82, 4),
-- ('Moosetape', 2021, 97.00, 5),
-- ('American Beauty', 1970, 42.21, 5),
-- ('Chet Baker Sings', 1956, 44.21, 1),
-- ('Hot Rats', 1969, 43.11, 2),
-- ('FEELS', 2017, 41.30, 3),
-- ('Rift', 1993, 67.44, 4),
-- ('5 Years of mau5', 2014, 134.12, 6);

-- INSERT INTO groups (name, num_followers)
-- ('Stan Rogers', 10000),
-- ('Snow Patrol', 239487),
-- ('Tom Misch', 98242),
-- ('Phish', 87634),
-- ('Sidhu Moosewala', 29364152),
-- ('The Grateful Dead', 352741),
-- ('deadmau5', 876345);
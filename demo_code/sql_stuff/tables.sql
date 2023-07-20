PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS song_genres;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS groups;

CREATE TABLE albums (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR NOT NULL,
	release_year INTEGER NOT NULL,
	length DECIMAL(5,2) NOT NULL,
	group_id INTEGER REFERENCES groups(id) ON DELETE SET NULL
);

CREATE TABLE groups (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(200) NOT NULL,
	num_followers INTEGER
);

CREATE TABLE songs (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title VARCHAR(200) NOT NULL,
	length DECIMAL(5,2),
	song_order INTEGER,
	single BOOLEAN DEFAULT false,
	-- album_id INTEGER,
	-- FOREIGN KEY (album_id) REFERENCES albums(id)
	album_id INTEGER REFERENCES albums(id) ON DELETE CASCADE
);

CREATE TABLE genres (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(50)
);

CREATE TABLE song_genres (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	genre_id INTEGER REFERENCES genres(id),
	song_id INTEGER REFERENCES songs(id)
);
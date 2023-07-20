INSERT INTO groups (name, num_followers)
VALUES
('Stan Rogers', 10000),
('Snow Patrol', 239487),
('Tom Misch', 98242),
('Phish', 87634),
('Sidhu Moosewala', 29364152),
('The Grateful Dead', 352741),
('deadmau5', 876345);

INSERT INTO albums (title, release_year, length, group_id)
VALUES
('A Hundred Million Suns', 2008, 58.25, 2),
('Fogerty''s Cove', 1977, 39.5, 1),
('Geography', 2018, 52.33, 3),
('Worlds', 2014, 57.82, 4),
('Moosetape', 2021, 97.00, 5),
('American Beauty', 1970, 42.21, 5),
('Chet Baker Sings', 1956, 44.21, 1),
('Hot Rats', 1969, 43.11, 2),
('FEELS', 2017, 41.30, 3),
('Rift', 1993, 67.44, 4),
('5 Years of mau5', 2014, 134.12, 6);


INSERT INTO songs (title, length, song_order, single, album_id)
VALUES
('Lifeboats', 4.42, 4, false, 1),
('Crack the Shutters', 3.2, 2, false, 1),
('Fogarty''s Cove', 2.1, 2, false, 2),
('Barrett''s Privateers', 4.14, 5, false, 2),
('Before Paris', 2.29, 1, false, 3),
('Lost In Paris', 3.14, 2, false, 3),
('Ghosts ''n'' Stuff', 5.28, 1, false, 6),
('Some Chords', 7.27, 4, false, 6);

INSERT INTO genres (name)
VALUES
('Rock'),
('Pop'),
('Blues'),
('Hip hop'),
('Classical'),
('Heavy Metal'),
('Folk');

INSERT INTO song_genres (genre_id, song_id)
VALUES
(2, 1),
(7, 1),
(2, 2),
(7, 3),
(7, 4),
(5, 5),
(4, 6),
(3, 7),
(6, 8),
(5, 8);
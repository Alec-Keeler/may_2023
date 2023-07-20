-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
-- Your code here

-- CREATE TABLE musicians (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   first_name VARCHAR(100) NOT NULL,
--   last_name VARCHAR(100)
-- );

-- CREATE TABLE instruments (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   type VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE musician_instruments (
--   musician_id INTEGER NOT NULL,
--   instrument_id INTEGER NOT NULL,
--   FOREIGN KEY (musician_id) REFERENCES musicians(id),
--   FOREIGN KEY (instrument_id) REFERENCES instruments(id)
-- );

SELECT musicians.first_name, instruments.type
FROM musicians
JOIN musician_instruments ON (musicians.id = musician_instruments.musician_id)
JOIN instruments ON (musician_instruments.instrument_id = instruments.id);

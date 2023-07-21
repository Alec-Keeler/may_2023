SELECT * FROM cats
JOIN toys ON (cats.id = toys.cat_id)
WHERE cats.name = 'Garfield';

SELECT * FROM toys
WHERE cat_id = (
	SELECT id FROM cats
	WHERE name = 'Garfield'
);

INSERT INTO toys (name, cat_id)
VALUES
('Pepperoni', (
	SELECT id FROM cats
	WHERE name = 'Garfield' 
));
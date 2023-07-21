SELECT COUNT(*) AS total_cats FROM cats;

SELECT *
FROM cats
WHERE birth_year = (SELECT MIN(birth_year) FROM cats)
OR birth_year = (SELECT MAX(birth_year) FROM cats);

SELECT COUNT(*), cats.name FROM toys
JOIN cats ON (cats.id = toys.cat_id)
GROUP BY cat_id
HAVING COUNT(*) > 1;
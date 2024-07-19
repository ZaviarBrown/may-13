-- SELECT cats.name AS cat, toys.name AS toy FROM toys
-- JOIN cats ON (toys.cat_id = cats.id);

--! Chill just use a JOIN
-- SELECT name, (SELECT DISTINCT name FROM toys) FROM cats
-- WHERE id IN (SELECT cat_id FROM toys);

--? Phase 1
SELECT name FROM toys
WHERE cat_id = (SELECT id FROM cats WHERE name = 'Garfield');

-- -- JS Example
-- const garfieldID = fetch('/garfield').id
-- toys.create('pepperoni', garfieldID)

--? Phase 2
-- --? Main power - INSERT from a SELECT
-- INSERT INTO toys (name, cat_id)
-- VALUES
-- ('Pepperoni', (SELECT id FROM cats WHERE name = 'Garfield'));


-- --? Bonus Phase 1
-- INSERT INTO toys (name, cat_id)
-- SELECT 'Cat Bed', id FROM cats WHERE birth_year < 2013;

-- --? Bonus Phase 2
-- INSERT INTO cats_backup
-- SELECT * FROM cats;

-- SELECT count() FROM (SELECT DISTINCT name FROM cats);
SELECT count(*) AS num_cats FROM cats;

-- Oldest
SELECT name, min(birth_year) FROM cats;

-- Youngest
SELECT name, max(birth_year) FROM cats;

--! No :( I can't get both cats
SELECT name, min(id), name, max(birth_year), max(id) FROM cats;
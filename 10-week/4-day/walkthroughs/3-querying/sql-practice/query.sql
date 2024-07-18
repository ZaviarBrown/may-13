--! --------------------------------------------------------------------
--*               Many to Many with multiple bands                                          
--! --------------------------------------------------------------------

-- albums table

-- bands table

-- CREATE TABLE band_albums (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     band_id_1 INTEGER, --? 1 | 2 | 3
--     band_id_2 INTEGER, --? In this case, DNE
--     album_id INTEGER,  --? 1 | 1 | 1

--     -- FOREIGN KEY
--     -- FOREIGN KEY
--     -- FOREIGN KEY
-- )

-- SELECT * FROM albums
-- WHERE num_sold >= 100000;

-- SELECT * FROM albums
-- WHERE year BETWEEN 2018 AND 2020;

-- SELECT * FROM albums
-- WHERE band_id IN (1, 3, 4);

-- SELECT * FROM albums
-- WHERE title LIKE 'The%';

SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2;

-- SELECT title, max(num_sold) AS highest_selling_album from albums
-- LIMIT 1;

SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2 OFFSET 2;
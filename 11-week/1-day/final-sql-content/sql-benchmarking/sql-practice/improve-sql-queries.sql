----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

-- --! Double Join
-- SELECT cats.name AS CatName, toys.name AS ToyName FROM cats
-- JOIN cat_toys ON (cats.id = cat_toys.cat_id)
-- JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE toys.id = 5;

-- --? Single Join
-- SELECT DISTINCT cats.* FROM cats
-- JOIN cat_toys ON cats.id = cat_toys.cat_id
-- WHERE cat_toys.toy_id = 5;

-- --* Subquery
-- SELECT * FROM cats
-- WHERE id IN (
--     SELECT cat_id FROM cat_toys
--     WHERE toy_id = 5
-- );


----------
-- Step 1 - Analyze the Query
----------
-- Query:

-- --! Double Join
-- EXPLAIN QUERY PLAN SELECT cats.name AS CatName, toys.name AS ToyName FROM cats
-- JOIN cat_toys ON (cats.id = cat_toys.cat_id)
-- JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE toys.id = 5;

-- --? Single Join
-- EXPLAIN QUERY PLAN SELECT DISTINCT cats.* FROM cats
-- JOIN cat_toys ON cats.id = cat_toys.cat_id
-- WHERE cat_toys.toy_id = 5;

-- --* Subquery
-- EXPLAIN QUERY PLAN SELECT * FROM cats
-- WHERE id IN (
--     SELECT cat_id FROM cat_toys
--     WHERE toy_id = 5
-- );

-- Paste your results below (as a comment):

-- --! Double Join
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- --? Single Join
-- QUERY PLAN
-- |--SCAN cat_toys
-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--USE TEMP B-TREE FOR DISTINCT

-- --* Subquery
-- QUERY PLAN
-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--LIST SUBQUERY 1
--    `--SCAN cat_toys



-- What do your results mean?

    -- Was this a SEARCH or SCAN?

        --! It was actually both!

    -- What does that mean?

        --! We can optimize MORE!!!


----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

-- --! Double Join
-- SELECT cats.name AS CatName, toys.name AS ToyName FROM cats
-- JOIN cat_toys ON (cats.id = cat_toys.cat_id)
-- JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE toys.id = 5;

-- --! Run Time: real 0.001 user 0.001469 sys 0.000206
-- --! Run Time: real 0.003 user 0.002106 sys 0.000277

-- --? Single Join
-- SELECT DISTINCT cats.* FROM cats
-- JOIN cat_toys ON cats.id = cat_toys.cat_id
-- WHERE cat_toys.toy_id = 5;

-- --? Run Time: real 0.001 user 0.000746 sys 0.000139
-- --? Run Time: real 0.003 user 0.001327 sys 0.000434

-- --* Subquery
-- SELECT * FROM cats
-- WHERE id IN (
--     SELECT cat_id FROM cat_toys
--     WHERE toy_id = 5
-- );

-- --* Run Time: real 0.001 user 0.000745 sys 0.000125
-- --* Run Time: real 0.003 user 0.001452 sys 0.000441



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

--% Create index:

-- CREATE INDEX
-- idx_cat_toys_toy_id
-- ON cat_toys(toy_id);

-- Run Time: real 0.012 user 0.004769 sys 0.002135

-- Analyze Query:

-- --! Double Join
-- EXPLAIN QUERY PLAN SELECT cats.name AS CatName, toys.name AS ToyName FROM cats
-- JOIN cat_toys ON (cats.id = cat_toys.cat_id)
-- JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE toys.id = 5;

-- --? Single Join
-- EXPLAIN QUERY PLAN SELECT DISTINCT cats.* FROM cats
-- JOIN cat_toys ON cats.id = cat_toys.cat_id
-- WHERE cat_toys.toy_id = 5;

-- --* Subquery
-- EXPLAIN QUERY PLAN SELECT * FROM cats
-- WHERE id IN (
--     SELECT cat_id FROM cat_toys
--     WHERE toy_id = 5
-- );

-- Paste your results below (as a comment):


-- Analyze Results:

    -- Is the new index being applied in this query?

        --! You bet your bottom dolla it worked!


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

-- --! Double Join
-- SELECT cats.name AS CatName, toys.name AS ToyName FROM cats
-- JOIN cat_toys ON (cats.id = cat_toys.cat_id)
-- JOIN toys ON (cat_toys.toy_id = toys.id)
-- WHERE toys.id = 5;

-- --! Run Time: real 0.000 user 0.000136 sys 0.000051
-- --! Run Time: real 0.001 user 0.000178 sys 0.000388

-- --? Single Join
-- SELECT DISTINCT cats.* FROM cats
-- JOIN cat_toys ON cats.id = cat_toys.cat_id
-- WHERE cat_toys.toy_id = 5;

-- --? Run Time: real 0.000 user 0.000159 sys 0.000081
-- --? Run Time: real 0.001 user 0.000203 sys 0.000136

-- --* Subquery
-- SELECT * FROM cats
-- WHERE id IN (
--     SELECT cat_id FROM cat_toys
--     WHERE toy_id = 5
-- );

-- --* Run Time: real 0.000 user 0.000098 sys 0.000074
-- --* Run Time: real 0.001 user 0.000142 sys 0.000331


-- Analyze Results:
    -- Are you still getting the correct query results?

        --! Yes most def

    -- Did the execution time improve (decrease)?

        --! Also yes, our old FASTEST time was slower than each new SLOWEST time

    -- Do you see any other opportunities for making this query more efficient?

        --! NO


---------------------------------
-- Notes From Further Exploration
---------------------------------

-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.

-- --! With alias
-- SELECT musicians.first_name, instruments.type 
-- FROM musician_instruments AS MI
-- JOIN musicians ON (MI.musician_id = musicians.id)
-- JOIN instruments ON (MI.instrument_id = instruments.id);

SELECT musicians.first_name, instruments.type 
FROM musician_instruments
JOIN musicians ON (musician_instruments.musician_id = musicians.id)
JOIN instruments ON (musician_instruments.instrument_id = instruments.id);

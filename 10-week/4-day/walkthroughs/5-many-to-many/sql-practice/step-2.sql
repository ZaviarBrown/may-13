-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.

-- SELECT first_name, last_name
-- FROM musician_instruments AS m_i
-- JOIN musicians ON (m_i.musician_id = musicians.id)
-- JOIN instruments ON (m_i.instrument_id = instruments.id)
-- WHERE type = 'piano';

SELECT first_name, last_name
FROM musician_instruments AS m_i
JOIN musicians ON (musician_id = id)
WHERE instrument_id = 1;

-- SELECT first_name, last_name
-- FROM musician_instruments AS m_i
-- JOIN musicians ON (m_i.musician_id = musicians.id)
-- JOIN instruments ON (m_i.instrument_id = instruments.id)
-- WHERE instruments.id = 1;
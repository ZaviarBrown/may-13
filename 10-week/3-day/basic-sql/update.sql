SELECT first_name, last_name FROM friends
WHERE last_name = 'Pond';

-- UPDATE friends
-- SET first_name = 'Ryder'
-- WHERE last_name = 'Pond';

UPDATE friends
SET first_name = 'Ryder'
WHERE last_name = 'Pond'
AND first_name = 'Ryan';

SELECT first_name, last_name FROM friends
WHERE last_name = 'Pond';


UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Tyler'
  AND last_name = 'Sky';

SELECT * FROM friends;
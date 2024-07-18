SELECT '---Making sure Puppy 9 exists first---';

SELECT * FROM puppies
WHERE id = 9;

SELECT 'Time to die puppy :(';

DELETE FROM puppies
WHERE id = 9;

SELECT * FROM puppies;

DELETE FROM puppies
WHERE microchipped = false;

SELECT * FROM puppies;
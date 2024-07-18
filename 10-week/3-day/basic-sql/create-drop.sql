DROP TABLE IF EXISTS puppies;

CREATE TABLE IF NOT EXISTS puppies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    age_yrs NUMERIC(3,1),
    breeed TEXT,
    weight_lbs INTEGER,
    microchipped BOOLEAN
);


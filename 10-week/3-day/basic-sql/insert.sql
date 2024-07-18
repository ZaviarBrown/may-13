.mode box

-- CREATE TABLE IF NOT EXISTS friends (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     first_name VARCHAR(255) NOT NULL DEFAULT 'Zaviar',
--     last_name VARCHAR(255) NOT NULL
-- );

-- -- Using a default value for a NOT NULL column
-- INSERT INTO friends (last_name)
-- VALUES
-- ('Pond');

CREATE TABLE IF NOT EXISTS friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

-- -- Specify what I want to insert
-- INSERT INTO friends (first_name, last_name)
-- VALUES
-- ('Amy', 'Pond');

-- -- Not specify what I want
-- -- You HAVE TO give me EVERYTHING
-- INSERT INTO friends
-- VALUES
-- (5, 'Amy', 'Pond');

-- Insert many at a time
INSERT INTO friends (first_name, last_name)
VALUES
('Amy', 'Pond'),
('Jamy', 'Pond'),
('Lamy', 'Pond'),
('Payme', 'Pond'),
('Slayme', 'Pond');

-- Treat yourself to a console.log!
SELECT * FROM friends;
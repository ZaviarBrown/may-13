DROP TABLE IF EXISTS colors;

CREATE TABLE colors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) UNIQUE,
    hue TEXT
);

INSERT INTO colors (name, hue)
VALUES
  ('Red', 'It is kind of dark'),
  ('White', 'Very bright and colorless'),
  ('Blue', 'Like the ocean');

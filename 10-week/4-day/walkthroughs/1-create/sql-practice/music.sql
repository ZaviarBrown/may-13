-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS musician_instruments;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id) ON DELETE CASCADE
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);
CREATE TABLE musician_instruments (
  m_id INTEGER NOT NULL,
  i_id INTEGER NOT NULL,
  FOREIGN KEY (m_id) REFERENCES musicians(id),
  FOREIGN KEY (i_id) REFERENCES instruments(id)
);

INSERT INTO bands (name)
VALUES
('Momo and the girls'),
('Z and his lonesome');

INSERT INTO musicians (first_name, last_name, band_id)
VALUES
('Momo', 'Duflot', 1),
('Tenten', 'Duflot', 1),
('Kiki', 'Duflot', 1),
('Zaviar', 'Brown', 2);
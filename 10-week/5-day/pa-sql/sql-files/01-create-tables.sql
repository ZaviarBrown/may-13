-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60) UNIQUE NOT NULL
);

-- tools
CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60),
    price NUMERIC(5, 2),
    department VARCHAR(60),

    FOREIGN KEY (department) REFERENCES department(name) ON DELETE SET NULL
);

-- customers
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    phone_number INTEGER(10) UNIQUE
);

-- purchases
CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quantity INTEGER,
    tool_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,

    FOREIGN KEY (tool_id) REFERENCES tools(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);


-- -- This ensures that SQLite enforces FOREIGN KEY constraints
-- PRAGMA foreign_keys = 1;

-- DROP TABLE IF EXISTS purchases;
-- DROP TABLE IF EXISTS customers;
-- DROP TABLE IF EXISTS tools;

-- -- tools
-- CREATE TABLE tools (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     name VARCHAR(60),
--     price NUMERIC(5, 2),
--     department VARCHAR(60)
-- );

-- -- customers
-- CREATE TABLE customers (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     first_name VARCHAR(20),
--     last_name VARCHAR(20),
--     phone_number INTEGER(10) UNIQUE
-- );

-- -- purchases
-- CREATE TABLE purchases (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     quantity INTEGER,
--     tool_id INTEGER NOT NULL,
--     customer_id INTEGER NOT NULL,

--     FOREIGN KEY (tool_id) REFERENCES tools(id),
--     FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
-- );

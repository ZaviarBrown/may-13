INSERT INTO department (name)
VALUES
('Home & Garden'),
('Electrical'),
('Plumbing');

INSERT INTO tools (name, price, department)
VALUES
('Snow shovel', 16.50, 'Home & Garden'),
('Work light', 29.99, 'Electrical'),
('Wheelbarrow', 89.99, 'Home & Garden'),
('Pipe Wrench', 18.99, 'Plumbing'),
('Pipe Cutter', 36.36, 'Plumbing'),
('Rake', 15.45, 'Home & Garden'),
('Women''s Gloves', 8.39, 'Home & Garden'),
('Men''s Gloves', 8.39, 'Home & Garden');

INSERT INTO customers (first_name, last_name, phone_number)
VALUES
('John', 'Smith', 1111111111),
('Jane', 'Doe', 2222222222);


INSERT INTO purchases (tool_id, customer_id, quantity)
VALUES
-- --? John Smith
-- 'Work light', 1
-- 'Pipe Cutter', 2
(2, 1, 1),
(5, 1, 2),

-- --? Jane Doe
-- 'Snow shovel', 3
-- 'Work light', 1
-- 'Women''s Gloves', 1
-- 'Pipe Wrench', 1
-- 'Pipe Cutter', 1
(1, 2, 3),
(2, 2, 1),
(7, 2, 1),
(4, 2, 1),
(5, 2, 1),

-- --? John Smith
-- 'Wheelbarrow', 3
-- 'Men''s Gloves', 2
(3, 1, 3),
(8, 1, 2);

-- INSERT INTO tools (name, price, department)
-- VALUES
-- ('Snow shovel', 16.50, 'Home & Garden'),
-- ('Work light', 29.99, 'Electrical'),
-- ('Wheelbarrow', 89.99, 'Home & Garden'),
-- ('Pipe Wrench', 18.99, 'Plumbing'),
-- ('Pipe Cutter', 36.36, 'Plumbing'),
-- ('Rake', 15.45, 'Home & Garden'),
-- ('Women''s Gloves', 8.39, 'Home & Garden'),
-- ('Men''s Gloves', 8.39, 'Home & Garden');

-- INSERT INTO customers (first_name, last_name, phone_number)
-- VALUES
-- ('John', 'Smith', 1111111111),
-- ('Jane', 'Doe', 2222222222);


-- INSERT INTO purchases (tool_id, customer_id, quantity)
-- VALUES
-- -- --? John Smith
-- -- 'Work light', 1
-- -- 'Pipe Cutter', 2
-- (2, 1, 1),
-- (5, 1, 2),

-- -- --? Jane Doe
-- -- 'Snow shovel', 3
-- -- 'Work light', 1
-- -- 'Women''s Gloves', 1
-- -- 'Pipe Wrench', 1
-- -- 'Pipe Cutter', 1
-- (1, 2, 3),
-- (2, 2, 1),
-- (7, 2, 1),
-- (4, 2, 1),
-- (5, 2, 1),

-- -- --? John Smith
-- -- 'Wheelbarrow', 3
-- -- 'Men''s Gloves', 2
-- (3, 1, 3),
-- (8, 1, 2);
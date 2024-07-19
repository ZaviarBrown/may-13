SELECT first_name, last_name, phone_number FROM customers
JOIN purchases ON (purchases.customer_id = customers.id)
JOIN tools on (purchases.tool_id = tools.id)
WHERE tools.name = 'Pipe Cutter'
ORDER BY purchases.id DESC
LIMIT 1;

-- SELECT first_name, last_name, phone_number FROM customers
-- WHERE id = (
--     SELECT customer_id FROM purchases
--     WHERE tool_id = (
--         SELECT id FROM tools
--         WHERE name = 'Pipe Cutter'
--     )
--     ORDER BY id DESC
--     LIMIT 1
-- );

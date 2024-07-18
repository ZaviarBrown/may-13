# DELETE CASCADE & Spicy SELECT

## Relationships crashing and burning - DELETE CASCADE

Creating relationships between tables allows us to leverage powerful tools

Remember our trees and leaves from yesterday?

```sql
-- In leaves table
FOREIGN KEY (tree_id) REFERENCES trees(id)
```

Currently if we delete a tree, thousands of leaves would be left treeless!

Instead, when we kill a tree, we want all the leaves to burn up with it

```sql
FOREIGN KEY (tree_id) REFERENCES trees(id) ON DELETE CASCADE
```

Now if a tree is deleted from our database, ALL leaves that have that tree id also get deleted!

## IMPORTANT NOTE

DELETE is a dangerous command! You can't reverse it, so tread lightly

---

## Spice up your SELECT's

SELECT has amazing capabilities, allowing us to request for very specific information from databases

`WHERE column IN (values)`

- Find all matching values in the parentheses
- It's similar to searching for everything inside of an array!

```sql
SELECT name, breed FROM puppies
WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');
```

`WHERE column BETWEEN value AND value`

- Specify a range and find all values that fit inside it

```sql
SELECT name, breed, age_yrs FROM puppies
WHERE age_yrs BETWEEN 0 AND 0.5;
```

`ORDER BY value`

- Determines the order that the data is given to us from the table
- Can be combined with a where
- Default order is small to large (a => z, 1 => 100)
- `DESC` flips order (z => a, 100 => 1)

```sql
-- Gives us name and breed of all puppies in alphabetical order by name
SELECT name, breed
FROM puppies
ORDER BY name;

-- Gives us name and breed of all puppies in order of oldest to youngest
SELECT name, breed
FROM puppies
ORDER BY age_yrs DESC; -- notice how age_years isn't being SELECT-ed

-- Gives us all info of all leaves with id's greater than 55, in order of
-- largest to smallest id
SELECT * FROM leaves
WHERE id > 55
ORDER BY id DESC;
```

`LIMIT value` & `OFFSET value`

- Limits the number of outputs to the LIMIT amount
  - Optional OFFSET param to output data only after the OFFSET amount

```sql
SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100;

-- OFFSET must be used with a LIMIT
SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100 OFFSET 100;
```

## [SQL Operators](https://appacademy.instructure.com/courses/314/pages/sql-operators-2?module_item_id=56204) add an incredible amount of precision to our queries.

Reference the reading to see more

// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Database file - DO NOT MODIFY
// DO NOT DO THIS - USE .env VARIABLE INSTEAD
const DB_FILE = 'app.db';

/**
 * Step 1 - Connect to the database
 */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(DB_FILE, sqlite3.OPEN_READWRITE);

// Express using json - DO NOT MODIFY
app.use(express.json());

// List of all colors in the database - DO NOT MODIFY
app.get('/colors', (req, res, next) => {
    const sql = 'SELECT * FROM colors';
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// One color by id
app.get('/colors/:id', (req, res, next) => {
    const { id } = req.params;
    /**
     * STEP 2A - SQL Statement
     */
    const sql = 'SELECT * FROM colors WHERE id = ?';
    /**
     * STEP 2B - SQL Parameters
     */
    const params = [id];
    /**
     * STEP 2C - Call database function
     *  - return response
     */
    db.get(sql, params, (errorIfSomethingGoesWrong, theDataFromDB) => {
        res.json(theDataFromDB);
    });
});

// Add color
app.get('/colors/add/:name', (req, res, next) => {
    // SQL INSERT
    const sql = 'INSERT INTO colors (name) VALUES (?, ?, ?)';
    const params = [req.params.name, req.params.otherData, req.params.lastData];

    // SQL QUERY NEW ROW
    const sqlLast = 'SELECT * FROM colors ORDER BY id DESC LIMIT 1';

    /**
     * STEP 3 - After INSERT, return the new row
     *  - insert
     *  - if error, go to next()
     *  - if no error, query for new row
     *  - return new row
     */
    // Your code here
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: 'API server is running',
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

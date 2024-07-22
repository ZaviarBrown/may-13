const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);

module.exports = db;

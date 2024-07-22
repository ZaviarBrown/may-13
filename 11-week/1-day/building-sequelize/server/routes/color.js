const express = require('express');
const colorRouter = express.Router();
const db = require('../db/db-setup');
const Color = require('../db/models/colors');

colorRouter.get('/', (req, res, next) => {
    const sql = Color.findAll();
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// colorRouter.get('/', (req, res, next) => {
//     return Color.findAll(db, res);
// });

// //! These are the same functions!
// colorRouter.get('/', Color.findAll(db));

// //! These are the same functions!
// colorRouter.get('/', (req, res, next) => {
//     const sql = 'SELECT * FROM colors;';
//     const params = [];

//     db.all(sql, params, (err, rows) => {
//         res.json(rows);
//     });
// });

// //? This is what Sequelize will look like!
// colorRouter.get('/', async (req, res, next) => {
//     const colorData = await Color.findAll();

//     return res.json({
//         colors: colorData,
//     });
// });

// One color by id
colorRouter.get('/:id', (req, res, next) => {
    const sql = Color.findOne(req.params.id);
    const params = [];

    db.get(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// Add color
colorRouter.post('/add', (req, res, next) => {
//  db.run(sql, params, (err) => //! Identical
    db.run(...Color.create(req.body), (err) => {
        const sql = Color.findAll();
        const params = [];

        db.all(sql, params, (err, rows) => {
            res.json(rows);
        });
    });
    // const sqlLast = 'SELECT * FROM colors ORDER BY id DESC LIMIT 1';
});

module.exports = colorRouter;

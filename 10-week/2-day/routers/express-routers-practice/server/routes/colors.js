const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        yas: 'GET /colors',
    });
});

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.json({
        yas: 'GET /colors/' + name,
    });
});

module.exports = router;

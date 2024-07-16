const express = require('express');
const router = express.Router();

//! /eldenRing + all routes below

// router.use('/type', typeRouter) // /eldenRing/type/ whatever/else

router.get('/bosses', (req, res) => {
    res.json({
        bosses: ['Radahn', 'Elden Beast', 'Tree Sentinel', 'Some Guy'],
    });
});

module.exports = router;

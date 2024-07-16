const express = require('express');
const router = express.Router();

//! /hades + all routes below

router.get('/bosses', (req, res) => {
    res.json({
        bosses: ['Megara', 'Bone Hydra', 'Hades'],
    });
});

module.exports = router;

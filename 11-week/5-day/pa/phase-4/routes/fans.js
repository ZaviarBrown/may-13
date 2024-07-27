const express = require('express');
const router = express.Router();
const { Fan } = require('../db/models');

//! All routes in this file begin with "/fans"

router.delete('/:fanId', async (req, res) => {
    const { fanId } = req.params;
    const fan = await Fan.findByPk(fanId);

    await fan.destroy();

    return res.json({
        message: 'Successfully deleted',
    });
});

router.get('/:fanId/drafts', async (req, res) => {
    const { fanId } = req.params;
    const fan = await Fan.findByPk(fanId);

    const players = await fan.getPlayers();

    return res.json(players);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { Team, Sport, Player, Match } = require('../db/models');

//! '/teams'

router.get('/', async (req, res) => {
    const allTeams = await Team.findAll({
        order: ['homeCity', ['name', 'DESC']],
    });

    return res.json(allTeams);
});

router.get('/:teamId/homeMatchesWon', async (req, res) => {
    // //! Verbose
    // const teamId = req.params.teamId;
    // const homeTeamId = teamId;
    // const winnerId = teamId;

    //? Just cuz we cool like dat
    const { teamId: homeTeamId, teamId: winnerId } = req.params;

    const homeMatchesWon = await Match.findAll({
        where: { homeTeamId, winnerId },
        include: { model: Team, as: 'AwayTeam' },
    });

    // //! Other Verbose Version
    // const homeMatchesWon = await Match.findAll({
    //     where: {
    //         homeTeamId: req.params.teamId,
    //         winnerId: req.params.teamId,
    //     },
    //     include: { model: Team, as: 'AwayTeam' },
    // });

    return res.json(homeMatchesWon);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const teamSportPlayers = await Team.findOne({
        where: { id },
        include: [Sport, { model: Player, as: 'TeamRoster' }],
    });

    return res.json(teamSportPlayers);
});

router.post('/:id/players', async (req, res) => {
    const { id } = req.params;

    const teamWithNewPlayer = await Team.findByPk(id);

    const newPlayer = await teamWithNewPlayer.createTeamRoster(req.body);

    // //! Before Part 2
    // const newPlayer = await teamWithNewPlayer.createPlayer(req.body);

    return res.json(newPlayer);
});

module.exports = router;

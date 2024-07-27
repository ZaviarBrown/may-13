'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
    {
        name: 'AAAA1',
        alias: 'BBBBBB1',
        affiliation: 'X-Men',
        heightCm: 150,
        isMutant: true,
        race: 'human',
        universe: 'Marvel',
        releaseYear: 1940,
    },
    {
        name: 'AAAA2',
        alias: 'BBBBBB2',
        affiliation: 'X-Men',
        heightCm: 150,
        isMutant: true,
        race: 'human',
        universe: 'Marvel',
        releaseYear: 1941,
    },
    {
        name: 'AAAA3',
        alias: 'BBBBBB3',
        affiliation: 'X-Men',
        heightCm: 150,
        isMutant: true,
        race: 'human',
        universe: 'Marvel',
        releaseYear: 1942,
    },
    {
        name: 'AAAA4',
        alias: 'BBBBBB4',
        affiliation: 'X-Men',
        heightCm: 150,
        isMutant: true,
        race: 'human',
        universe: 'Marvel',
        releaseYear: 1943,
    },
    {
        name: 'AAAA5',
        alias: 'BBBBBB5',
        affiliation: 'X-Men',
        heightCm: 150,
        isMutant: true,
        race: 'human',
        universe: 'Marvel',
        releaseYear: 1944,
    },
];

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await Superhero.bulkCreate(validSuperheros, {
                validate: true,
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    async down(queryInterface, Sequelize) {
        for (let superheroInfo of validSuperheros) {
            try {
                await Superhero.destroy({
                    where: superheroInfo,
                });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    },
    // DO NOT MODIFY BELOW (for testing purposes):
    validSuperheros,
};

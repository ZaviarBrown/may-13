'use strict';

const { Musician, Instrument } = require('../models');
const { Op } = require('sequelize');

const musicianInstruments = [
    {
        musician: { firstName: 'Adam', lastName: 'Appleby' },
        instruments: [{ type: 'piano' }, { type: 'guitar' }],
    },
    {
        musician: { firstName: 'Anton', lastName: 'Martinovic' },
        instruments: [{ type: 'piano' }, { type: 'bass' }],
    },
    {
        musician: { firstName: 'Wilson', lastName: 'Holt' },
        instruments: [{ type: 'cello' }],
    },
    {
        musician: { firstName: 'Marine', lastName: 'Sweet' },
        instruments: [{ type: 'saxophone' }],
    },
    {
        musician: { firstName: 'Georgette', lastName: 'Kubo' },
        instruments: [
            { type: 'drums' },
            { type: 'trumpet' },
            { type: 'saxophone' },
        ],
    },
    {
        musician: { firstName: 'Aurora', lastName: 'Hase' },
        instruments: [{ type: 'violin' }, { type: 'cello' }],
    },
    {
        musician: { firstName: 'Trenton', lastName: 'Lesley' },
        instruments: [{ type: 'piano' }],
    },
    {
        musician: { firstName: 'Camila', lastName: 'Nenci' },
        instruments: [{ type: 'piano' }],
    },
    {
        musician: { firstName: 'Rosemarie', lastName: 'Affini' },
        instruments: [{ type: 'piano' }, { type: 'violin' }],
    },
    {
        musician: { firstName: 'Victoria', lastName: 'Cremonesi' },
        instruments: [{ type: 'violin' }],
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        for (const { musician, instruments } of musicianInstruments) {
            const currentMusician = await Musician.findOne({ where: musician });

            //! All at once
            const allInstruments = await Instrument.findAll({
                where: {
                    [Op.or]: instruments,
                },
            });

            currentMusician.addInstruments(allInstruments);

            // const whatAmI = await currentMusician.addInstruments(
            //     allInstruments
            // );

            // console.log(whatAmI);

            // //! One by one
            // for (const instrumentData of instruments) {
            //     const currentInstrument = await Instrument.findOne({
            //         where: instrumentData,
            //     });

            //     currentMusician.addInstrument(currentInstrument);
            // }

            //! Using [Op.in]
            // const allInstruments = await Instrument.findAll({
            //     where: {
            //         type: {
            //             // [Op.in]: instruments.reduce(
            //             //     (el, next) => el.push(next.type),
            //             //     []
            //             // ), // ['piano', 'violin']
            //             [Op.in]: instruments.map(({ type }) => type), // ['piano', 'violin']
            //             // [Op.in]: instruments.map((el) => el.type), // ['piano', 'violin']
            //         },
            //     },
            // });
        }
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        for (const { musician, instruments } of musicianInstruments) {
            const currentMusician = await Musician.findOne({
                where: musician,
            });

            //! All at once
            const allInstruments = await Instrument.findAll({
                where: {
                    [Op.or]: instruments,
                },
            });

            currentMusician.removeInstruments(allInstruments);
        }
    },
};

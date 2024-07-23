'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Color } = require('../models');

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await Color.bulkCreate(
            [
                {
                    name: 'red',
                },
                {
                    name: 'blue',
                },
                {
                    name: 'yellow',
                },
                // {
                //     name: 'gray',
                // },
                // {
                //     name: 'x',
                // },
            ],
            {
                validate: true,
            }
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        //! Deletes everything
        // await queryInterface.bulkDelete('Colors');

        //? Deletes specific things
        await queryInterface.bulkDelete('Colors', {
            name: ['red', 'blue', 'yellow'],
        });
    },
};

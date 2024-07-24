'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('MusicianInstruments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            musicianId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Musicians',
                },
                allowNull: false,
            },
            instrumentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Instruments',
                },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('MusicianInstruments');
    },
};

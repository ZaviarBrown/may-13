'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Matches', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            homeTeamId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Teams',
                    key: 'id',
                },
            },
            awayTeamId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Teams',
                    key: 'id',
                },
            },
            winnerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Teams',
                    key: 'id',
                },
            },
            matchDate: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Matches');
    },
};

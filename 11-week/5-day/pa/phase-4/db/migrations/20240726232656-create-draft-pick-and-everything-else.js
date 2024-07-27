'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('DraftPicks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fanId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Fans',
                },
                onDelete: 'CASCADE',
            },
            playerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Players',
                },
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

        await queryInterface.addColumn('Players', 'currentTeamId', {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Teams',
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Players', 'currentTeamId');

        await queryInterface.dropTable('DraftPicks');
    },
};

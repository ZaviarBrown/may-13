'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(
            '\n\n-----------------------HWSEUIOFHEOFIUHEF---------------------\n\n'
        );
        await queryInterface.createTable('Colors', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Colors');
    },
};

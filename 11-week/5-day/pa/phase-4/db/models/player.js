'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Player extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Player.belongsTo(models.Team, { foreignKey: 'currentTeamId' });
            Player.belongsToMany(models.Fan, {
                through: models.DraftPick, //? "DraftPicks" // also works
                foreignKey: 'playerId',
                otherKey: 'fanId',
            });
        }
    }
    Player.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            isRetired: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            currentTeamId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Player',
        }
    );
    return Player;
};

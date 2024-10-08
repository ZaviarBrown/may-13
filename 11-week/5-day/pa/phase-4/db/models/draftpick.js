'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DraftPick extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here //! NOTHING!!!!!!
        }
    }
    DraftPick.init(
        {
            fanId: DataTypes.INTEGER,
            playerId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'DraftPick',
        }
    );
    return DraftPick;
};

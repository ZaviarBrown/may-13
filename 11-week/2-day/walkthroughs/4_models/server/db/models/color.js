'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Color.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            hue: DataTypes.STRING,
            isPrimary: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: {
                    isRedBlueYellow() {
                        //! The return value has NO EFFECT on the outcome of the validation!!!!

                        // this.isPrimary = ['red', 'blue', 'yellow'].includes(
                        //     this.name.toLowerCase()
                        // );

                        // const color = this.name.toLowerCase();

                        // if (['red', 'blue', 'yellow'].includes(color)) {
                        //     this.isPrimary = true;
                        // } else {
                        //     this.isPrimary = false;
                        // }

                        // if (checkIfItsAColor(this.name)) {
                        //     throw new Error('Not a valid color');
                        // }
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'Color',
        }
    );
    return Color;
};

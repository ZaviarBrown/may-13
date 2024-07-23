'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Deer.init({
    name: DataTypes.STRING,
    isBambi: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Deer',
  });
  return Deer;
};
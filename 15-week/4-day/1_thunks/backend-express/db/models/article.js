"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [5, 20],
            msg: "Title must be 20 characters or less and at least 5 characters",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );
  Article.associate = function (models) {
    // associations can be defined here
  };
  return Article;
};

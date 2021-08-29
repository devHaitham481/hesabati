"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Listing.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Listing",
      tableName: "listing",
      underscored: true,
    }
  );

  return Listing;
};

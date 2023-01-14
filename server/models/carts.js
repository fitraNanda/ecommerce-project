"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carts.belongsTo(models.Users);
      Carts.belongsTo(models.Products);
    }
  }
  Carts.init(
    {
      usersId: DataTypes.INTEGER,
      productsId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      isPay: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Carts",
    }
  );
  return Carts;
};

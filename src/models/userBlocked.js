const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserBlocked", {
    userBlockedID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

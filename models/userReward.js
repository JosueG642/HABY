// models/userReward.js
"use strict";

module.exports = (sequelize, DataTypes) => {
  const UserReward = sequelize.define(
    "userReward",
    {
      idUserReward: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reward: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "userrewards",
      timestamps: false,
      freezeTableName: true,
    }
  );

  UserReward.associate = function (models) {
    UserReward.belongsTo(models.Usuario, { foreignKey: "user" });
    UserReward.belongsTo(models.Reward, { foreignKey: "reward" });
  };

  return UserReward;
};

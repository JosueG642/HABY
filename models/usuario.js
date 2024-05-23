"use strict";

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeUser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      coins: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 300,
      },
    },
    {
      tableName: "user",
      timestamps: true,
    }
  );

  return Usuario;
};

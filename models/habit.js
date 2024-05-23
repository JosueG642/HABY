"use strict";

module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define(
    "Habit",
    {
      idHabit: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user", // Nombre de la tabla de usuario
          key: "idUser",
        },
      },
      habitName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      habitType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "habit",
      timestamps: true,
    }
  );

  return Habit;
};

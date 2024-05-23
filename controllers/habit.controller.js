"use strict";

var { habit } = require("../models");

const create_habit = async function (req, res) {
  try {
    var data = req.body;
    var newHabit = await habit.create({
      userId: data.userId, // Asegúrate de incluir el userId
      habitName: data.habitName,
      description: data.description,
      habitType: data.habitType,
      category: data.category,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    });
    res.status(200).send({ data: newHabit });
  } catch (error) {
    res.status(500).send({ message: "Error del servidor", error });
  }
};

const delete_habit = async function (req, res) {
  try {
    var idHabit = req.params.idHabit;
    var habitDeleted = await habit.destroy({ where: { idHabit: idHabit } });
    if (habitDeleted) {
      res.status(200).send({ message: "Hábito eliminado correctamente" });
    } else {
      res.status(404).send({ message: "Hábito no encontrado" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error del servidor", error });
  }
};

const update_habit = async function (req, res) {
  try {
    var idHabit = req.params.idHabit;
    var data = req.body;

    var habitUpdated = await habit.update(data, {
      where: { idHabit: idHabit },
    });

    if (habitUpdated[0] === 1) {
      res.status(200).send({ message: "Hábito actualizado correctamente" });
    } else {
      res
        .status(404)
        .send({ message: "Hábito no encontrado o no actualizado" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error del servidor", error });
  }
};

const get_habits_by_userId = async function (req, res) {
  try {
    var userId = req.params.userId;
    var habits = await habit.findAll({ where: { userId: userId } });
    if (habits.length > 0) {
      res.status(200).send({ data: habits });
    } else {
      res
        .status(404)
        .send({ message: "No se encontraron hábitos para este usuario" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error del servidor", error });
  }
};

module.exports = {
  create_habit,
  delete_habit,
  update_habit,
  get_habits_by_userId,
};

// controllers/userReward.controller.js
"use strict";

const { userReward, Usuario, Reward } = require("../models");

const create_user_reward = async function (req, res) {
  try {
    const data = req.body;

    // Verificar si el userId existe en la tabla de usuarios
    const userExists = await Usuario.findOne({ where: { idUser: data.user } });
    if (!userExists) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }

    // Verificar si el rewardId existe en la tabla de recompensas
    const rewardExists = await Reward.findOne({
      where: { idReward: data.reward },
    });
    if (!rewardExists) {
      return res.status(404).send({ message: "Recompensa no encontrada" });
    }

    // Verificar si el usuario tiene suficientes monedas para la recompensa
    if (userExists.coins < rewardExists.cost) {
      return res
        .status(400)
        .send({
          message: "No tienes suficientes monedas para esta recompensa",
        });
    }

    // Restar el costo de la recompensa de las monedas del usuario
    userExists.coins -= rewardExists.cost;
    await userExists.save();

    // Crear la nueva relación en userReward
    const newUserReward = await userReward.create({
      user: data.user,
      reward: data.reward,
    });

    res.status(200).send({ data: newUserReward });
  } catch (error) {
    console.error("Error del servidor", error);
    res
      .status(500)
      .send({ message: "Error del servidor", error: error.message });
  }
};

module.exports = {
  create_user_reward,
};

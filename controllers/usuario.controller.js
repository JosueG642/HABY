"use strict";

var { Usuario } = require("../models");
var bcrypt = require("bcrypt");
var jwt = require("../helpers/jwt");

const registro_usuario = async function (req, res) {
  try {
    var data = req.body;
    var usuarios_arr = await Usuario.findAll({ where: { email: data.email } });

    if (usuarios_arr.length === 0) {
      if (data.password) {
        bcrypt.hash(data.password, 10, async function (err, hash) {
          if (hash) {
            data.password = hash;
            data.coins = 300; // Asegurarse de que el valor predeterminado sea 300 monedas
            try {
              var reg = await Usuario.create(data);
              res.status(200).send({ data: reg });
            } catch (err) {
              res
                .status(400)
                .send({ message: "Error de validación", errors: err.errors });
            }
          } else {
            res.status(500).send({
              message: "Error del servidor al encriptar la contraseña",
              data: undefined,
            });
          }
        });
      } else {
        res
          .status(400)
          .send({ message: "No hay una contraseña", data: undefined });
      }
    } else {
      res.status(400).send({
        message: "El correo ya existe en la base de datos",
        data: undefined,
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Error del servidor", error });
  }
};

const login_usuario = async function (req, res) {
  var data = req.body;

  // Validación de campos
  if (!data.email) {
    return res.status(400).send({ message: "El campo 'email' es requerido." });
  }

  if (!data.password) {
    return res
      .status(400)
      .send({ message: "El campo 'password' es requerido." });
  }

  try {
    var usuario_arr = await Usuario.findAll({ where: { email: data.email } });

    if (usuario_arr.length === 0) {
      res
        .status(400)
        .send({ message: "No se encontró el correo", data: undefined });
    } else {
      let user = usuario_arr[0];

      bcrypt.compare(data.password, user.password, function (error, check) {
        if (check) {
          res.status(200).send({
            data: user,
            token: jwt.createToken(user),
          });
        } else {
          res
            .status(400)
            .send({ message: "La contraseña no coincide", data: undefined });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Error del servidor", error });
  }
};

module.exports = {
  registro_usuario,
  login_usuario,
};

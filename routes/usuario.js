("use strict");

var express = require("express");
var usuarioController = require("../controllers/usuario.controller");

var api = express.Router();

api.post("/registro_usuario", usuarioController.registro_usuario);
api.post("/login_usuario", usuarioController.login_usuario);

module.exports = api;

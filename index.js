// index.js
"use strict";

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");

const port = process.env.PORT || 4201;

const user_route = require("./routes/usuario");
const habit_route = require("./routes/habit");
const userReward_route = require("./routes/userReward"); // Añadido aquí

// Conectar a MySQL
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos MySQL");
    return sequelize.sync(); // No uses alter ni force
  })
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((err) => {
    console.error("No se puede conectar a la base de datos:", err);
  });

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: "50mb", extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use("/api", user_route);
app.use("/api", habit_route);
app.use("/api", userReward_route); // Añadido aquí

module.exports = app;

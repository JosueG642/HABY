"use strict";

var express = require("express");
var habitController = require("../controllers/habit.controller");

var api = express.Router();

api.post("/create_habit", habitController.create_habit);
api.delete("/delete_habit/:idHabit", habitController.delete_habit);
api.put("/update_habit/:idHabit", habitController.update_habit);
api.get("/get_habits_by_user/:userId", habitController.get_habits_by_userId);

module.exports = api;

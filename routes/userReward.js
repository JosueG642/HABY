// routes/userReward.js
"use strict";

const express = require("express");
const userRewardController = require("../controllers/userReward.controller");

const api = express.Router();

api.post("/create_user_reward", userRewardController.create_user_reward);

module.exports = api;

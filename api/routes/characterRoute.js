const express = require("express");

const route = express.Router();

const characterController = require("../controllers/characterController");

route.post("/character/create", characterController.createCharacter);

route.get("/characters", characterController.getCharacters);

module.exports = route;
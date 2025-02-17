const express = require("express");

const route = express.Router();

const logregControllers = require("../controllers/logregController");

route.post("/register", logregControllers.registerUser);

route.get("/login", logregControllers.loginUser);

module.exports = route;
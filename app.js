const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./api/database/dbContext")

const errorHandler = require("./api/middlewares/errorHandler");

const registerRoute = require("./api/routes/logregRoute");

const characterRoute = require("./api/routes/characterRoute");

app.use("/", registerRoute);

app.use("/", characterRoute);

app.use(errorHandler.notFoundError);

app.use(errorHandler.showError);

module.exports = app;

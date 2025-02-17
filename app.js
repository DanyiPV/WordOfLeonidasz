const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const db = require("./api/database/dbContext")

const errorHandler = require("./api/middlewares/errorHandler");

const apiAuth = require("./api/middlewares/apiAuth");

const registerRoute = require("./api/routes/logregRoute");

const characterRoute = require("./api/routes/characterRoute");

app.use("/", [ apiAuth.verifyApiPassword ] , registerRoute);

app.use("/", [ apiAuth.verifyApiPassword ] , characterRoute);

app.use(errorHandler.notFoundError);

app.use(errorHandler.showError);

module.exports = app;

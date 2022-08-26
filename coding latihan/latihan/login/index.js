const express = require("express");

const loginRoutes = express.Router();

loginRoutes.post("/", res.JSON({ message: "halaman login" }));

module.exports = loginRoutes;

const express = require("express");

const shipmentsRoutes = express.Router();

shipmentsRoutes.post("/", res.JSON({ message: "post shipments" }));
shipmentsRoutes.get("/", res.JSON({ message: "get shipments" }));
shipmentsRoutes.put("/:id", res.JSON({ message: "put by id" }));
shipmentsRoutes.put("/", res.JSON({ message: "put shipments" }));

module.exports = shipmentsRoutes;

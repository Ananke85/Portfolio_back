const express = require("express");

const {
  getAllWorks,
  postWork,
  getWorkById,
} = require("../controller/portfolioController");

const portfolioRouter = express.Router();

portfolioRouter.get("/", getAllWorks);
portfolioRouter.get("/:id", getWorkById);
portfolioRouter.post("/", postWork);

module.exports = portfolioRouter;

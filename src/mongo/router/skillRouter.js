const express = require("express");

const { getAllSkills, postSkill } = require("../controller/skillController");

const skillRouter = express.Router();

skillRouter.get("/", getAllSkills);
skillRouter.post("/", postSkill);

module.exports = skillRouter;

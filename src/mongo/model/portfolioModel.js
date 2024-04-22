const { model } = require("mongoose");

const portfolioSchema = require("../schema/portfolioSchema");
const portfolioModel = model("portfolio", portfolioSchema);

module.exports = portfolioModel;
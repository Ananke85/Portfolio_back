const { model } = require("mongoose");

const skillSchema = require("../schema/skillSchema");
const skillModel = model("skill", skillSchema);

module.exports = skillModel;
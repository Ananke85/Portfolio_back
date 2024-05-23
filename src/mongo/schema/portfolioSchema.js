const { Schema } = require("mongoose");

const portfolioSchema = new Schema({
  title: { type: String },
  images: [{ type: String }],
  intro: {
    eng: { type: String },
    es: { type: String },
  },
  description: {
    eng: { type: String },
    es: { type: String },
  },
  technologies: [
    {
      name: { type: String },
      image: { type: String },
    },
  ],
  repo: { type: String },
  web: {type: String, default: ""}
});

module.exports = portfolioSchema;
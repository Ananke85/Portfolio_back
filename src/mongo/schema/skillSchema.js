const { Schema } = require("mongoose");

const skillSchema = new Schema({
  name: {
    eng: { type: String },
    es: { type: String }
  },
  image: { type: String },
  description: {
    eng: { type: String },
    es: { type: String }
  },
  category: {type: String}
  
});

module.exports = skillSchema;
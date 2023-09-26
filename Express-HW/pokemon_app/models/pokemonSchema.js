// STEP 1: IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP:2 CREATE YOUR DATA SCHEMA
const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

// STEP:3 CREATE YOUR MODEL USING SCHEMA
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

//STEP:4 EXPORT
module.exports = Pokemon;

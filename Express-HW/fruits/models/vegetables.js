// STEP 1: IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP:2 CREATE YOUR DATA SCHEMA
const vegieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToCook: Boolean,
});

// STEP:3 CREATE YOUR MODEL USING SCHEMA
const Vegetable = mongoose.model("Vegetable", vegieSchema);

//STEP:4 EXPORT
module.exports = Vegetable;

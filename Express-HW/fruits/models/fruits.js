// STEP 1: IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP:2 CREATE YOUR DATA SCHEMA
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

// STEP:3 CREATE YOUR MODEL USING SCHEMA
const Fruit = mongoose.model("Fruit", fruitSchema);

//STEP:4 EXPORT
module.exports = Fruit;

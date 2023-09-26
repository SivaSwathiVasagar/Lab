const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
// const port = 3000;
// const pokemon = require("./models/pokemon.js");
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const Pokemon = require("./models/pokemonSchema.js");

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to MONGO");
});

// Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Pokemon App!</h1>`);
});
// INDEX
app.get("/pokemon", async (req, res) => {
  // res.render("Index", { pokemon: pokemon });
  try {
    const pokemon = await Pokemon.find();
    res.render("Index", { pokemon: pokemon });
  } catch (error) {
    console.log(error);
  }
});

// NEW
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// DELETE
app.delete("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndRemove(req.params.id);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
app.put("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// CREATE
app.post("/pokemon", async (req, res) => {
  try {
    // pokemon.push(req.body);
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// EDIT
app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const FoundPoke = await Pokemon.findById(req.params.id);
    res.render("Edit", { pokemon: FoundPoke });
  } catch (error) {
    console.log(error);
  }
});

// app.get("/pokemon/:id", (req, res) => {
//   // res.send(req.params.id);
//    res.send(pokemon[req.params.id]);
// });

// SHOW
app.get("/pokemon/:id", async (req, res) => {
  try {
    // const id = req.params.id;
    // const selectedPokemon = pokemon[id];
    // if (!selectedPokemon) {
    //   res.send(
    //     "<h3>No Pokemon to display at that Index </h3> <h4><a href='/pokemon'>Back</a></h4>"
    //   );
    // } else {
    const selectedPokemon = await Pokemon.findById(req.params.id);
    if (!selectedPokemon) {
      res.send(
        "<h3>No Pokemon to display at that Index </h3> <h4><a href='/pokemon'>Back</a></h4>"
      );
    } else {
      res.render("Show", { selectedPokemon });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on PORT");
});

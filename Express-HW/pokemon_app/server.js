const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js");
const jsxEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Pokemon App!</h1>`);
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

// app.get("/pokemon/:id", (req, res) => {
//   // res.send(req.params.id);
//    res.send(pokemon[req.params.id]);
// });

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const selectedPokemon = pokemon[id];
  if (!selectedPokemon) {
    res.send(
      "<h3>No Pokemon to display at that Index </h3> <h4><a href='/pokemon'>Back</a></h4>"
    );
  } else {
    res.render("Show", { pokemon: selectedPokemon });
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});

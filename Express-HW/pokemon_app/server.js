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

app.listen(port, () => {
  console.log("listening on port", port);
});

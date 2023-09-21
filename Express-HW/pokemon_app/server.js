const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js");
const jsxEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: false }));

// Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Pokemon App!</h1>`);
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
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

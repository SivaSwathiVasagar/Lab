const express = require("express");
const app = express();
const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require("./models/vegetables.js");
const jsxEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
//app.engine("jsx", require("jsx-view-engine").createEngine());
app.engine("jsx", jsxEngine());

app.get("/fruits/", (req, res) => {
  //   res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

//add show route
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  //   res.send(fruits[req.params.indexOfFruitsArray]);
  //   res.render("Show");
  res.render("fruits/Show", {
    //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

/// vegetables

app.get("/vegetables/", (req, res) => {
  res.render("vegetables/Index", { vegetables: vegetables });
});

//add show route
app.get("/vegetables/:indexOfVegetablesArray", (req, res) => {
  res.render("vegetables/Show", {
    vegetable: vegetables[req.params.indexOfVegetablesArray],
  });
});

app.listen(3001, () => {
  console.log("listening");
});

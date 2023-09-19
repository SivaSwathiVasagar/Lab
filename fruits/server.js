const express = require("express");
const app = express();
const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
const vegetables = require("./models/vegetables.js");
const jsxEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
//app.engine("jsx", require("jsx-view-engine").createEngine());
app.engine("jsx", jsxEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

// Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
///////// ************* Fruits ********** /////////
// route INDUCES
// Index
app.get("/fruits/", (req, res) => {
  //   res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

//put this above your Show route
// NEW
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

///////// ************* Vegetables ********** /////////

app.get("/vegetables/", (req, res) => {
  res.render("vegetables/Index", { vegetables: vegetables });
});
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

///////// ************* Fruits ********** /////////
// CREATE
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);
  //   res.send("data received");
  res.redirect("/fruits"); //send the user back to /fruits
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

///////// ************* Vegetables ********** /////////

app.post("/vegetables", (req, res) => {
  if (req.body.readyToCook === "on") {
    req.body.readyToCook = true;
  } else {
    req.body.readyToCook = false;
  }
  vegetables.push(req.body);
  res.redirect("/vegetables");
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

const express = require("express");
const app = express();
// require("dotenv").config();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jsxEngine = require("jsx-view-engine");
dotenv.config();
const methodOverride = require("method-override");

// const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package
// const vegetables = require("./models/vegetables.js");

const Fruit = require("./models/fruits.js");
const Vegetable = require("./models/vegetables.js");

app.set("view engine", "jsx");
//app.engine("jsx", require("jsx-view-engine").createEngine());
app.engine("jsx", jsxEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(methodOverride("_method"));
//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));
// Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
// route INDUCES
// Index , this kind of code declaration is used only in ES6 version, so callback function does not works for ES7
// app.get("/fruits/", (req, res) => {
//   //   res.send(fruits);
//   // res.render("fruits/Index", { fruits: fruits });
//   Fruit.find({}, (error, allFruits) => {
//     res.render("fruits/Index", {
//       fruits: allFruits,
//     });
//   });
// });

app.get("/fruits/", async (req, res) => {
  // res.send(fruits);
  // res.render("fruits/Index", { fruits: fruits });
  try {
    const fruits = await Fruit.find();
    res.render("fruits/Index", { fruits: fruits });
  } catch (error) {
    console.error(error);
  }
});

//put this above your Show route
// NEW
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

// DELETE
app.delete("/fruits/:id", async (req, res) => {
  try {
    await Fruit.findByIdAndRemove(req.params.id);
    res.redirect("/fruits"); //redirect back to fruits index
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
app.put("/fruits/:id", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
    }
    // fruits.push(req.body);
    await Fruit.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/fruits");
  } catch (error) {
    console.log(error);
  }
});

// CREATE

app.post("/fruits", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
    }
    // fruits.push(req.body);
    await Fruit.create(req.body);

    res.redirect("/fruits");
  } catch (error) {
    console.log(error);
  }
});

// EDIT
app.get("/fruits/:id/edit", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Edit", { fruit: foundFruit });
  } catch (error) {
    console.log(error);
  }
});
//add show route
app.get("/fruits/:id", async (req, res) => {
  //   res.send(fruits[req.params.indexOfFruitsArray]);
  //   res.render("Show");
  // res.render("fruits/Show", {
  //   //second param must be an object
  //   fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  try {
    const fruit = await Fruit.findById(req.params.id);
    res.render("fruits/Show", { fruit });
  } catch (error) {
    console.log(error);
  }
});
///////// ************* Vegetables ********** /////////

app.get("/vegetables/", async (req, res) => {
  //res.render("vegetables/Index", { vegetables: vegetables });
  try {
    const vegetables = await Vegetable.find();
    res.render("vegetables/Index", { vegetables: vegetables });
  } catch (error) {
    console.error(error);
  }
});

// NEW
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

// DELETE
app.delete("/vegetables/:id", async (req, res) => {
  try {
    await Vegetable.findByIdAndRemove(req.params.id);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
app.put("/vegetables/:id", async (req, res) => {
  try {
    if (req.body.readyToCook === "on") {
      req.body.readyToCook = true;
    } else {
      req.body.readyToCook = false;
    }

    await Vegetable.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});

// CREATE
app.post("/vegetables", async (req, res) => {
  try {
    if (req.body.readyToCook === "on") {
      req.body.readyToCook = true;
    } else {
      req.body.readyToCook = false;
    }
    await Vegetable.create(req.body);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});

// EDIT
app.get("/vegetables/:id/edit", async (req, res) => {
  try {
    const foundVegetables = await Vegetable.findById(req.params.id);
    res.render("vegetables/Edit", { vegetable: foundVegetables });
  } catch (error) {
    console.log(error);
  }
});

//add show route
app.get("/vegetables/:id", async (req, res) => {
  try {
    const vegetable = await Vegetable.findById(req.params.id);
    res.render("vegetables/Show", { vegetable });
  } catch (error) {
    console.log(error);
  }
});
app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});

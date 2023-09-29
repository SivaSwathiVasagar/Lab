const express = require("express");
const app = express();
// require("dotenv").config();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jsxEngine = require("jsx-view-engine");
dotenv.config();
const methodOverride = require("method-override");

const Logs = require("./models/logs");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to MONGO");
});

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.get("/logs", async (req, res) => {
  // res.send("Index");
  try {
    const logs = await Logs.find();
    // res.render("logs/Index", { logs: logs });
    res.render("Index", { logs });
  } catch (error) {
    console.error(error);
  }
});

// NEW
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// DELETE
app.delete("/logs/:id", async (req, res) => {
  try {
    await Logs.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
app.put("/logs/:id", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }

    await Logs.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// CREATE
app.post("/logs", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    await Logs.create(req.body);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// EDIT
app.get("/logs/:id/edit", async (req, res) => {
  try {
    const logsfound = await Logs.findById(req.params.id);
    res.render("Edit", { log: logsfound });
  } catch (error) {
    console.log(error);
  }
});

// SHOW
app.get("/logs", async (req, res) => {
  try {
    const selectedLogs = await Logs.findById(req.params.id);
    res.render("Show", { selectedLogs });
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening to PORT");
});

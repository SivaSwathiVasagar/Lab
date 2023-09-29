const express = require("express");
const app = express();
// require("dotenv").config();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jsxEngine = require("jsx-view-engine");
dotenv.config();
const methodOverride = require("method-override");

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

app.get("/logs", (req, res) => {
  res.send("Recieved");
});

//NEW
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// CREATE

app.post("/logs", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});
app.listen(process.env.PORT || 3000, () => {
  console.log("listening to PORT");
});

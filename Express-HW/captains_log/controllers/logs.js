const express = require("express");
const router = express.Router();
const Logs = require("../models/logs");

router.get("/", async (req, res) => {
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
router.get("/new", (req, res) => {
  res.render("New");
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Logs.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
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
router.post("/", async (req, res) => {
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
router.get("/:id/edit", async (req, res) => {
  try {
    const logsfound = await Logs.findById(req.params.id);
    res.render("Edit", { log: logsfound });
  } catch (error) {
    console.log(error);
  }
});

// SHOW
router.get("/:id", async (req, res) => {
  try {
    const selectedLogs = await Logs.findById(req.params.id);
    res.render("Show", { selectedLogs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

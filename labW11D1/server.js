const express = require("express");
const app = express();

//////////////////      Greeting express application created    ///////////////////
// app.get("/greeting/", function (req, res) {
//   res.send("<h1>Hello, stranger</h1>");
// });

// app.get("/greeting/:name", function (req, res) {
// //   console.log(req.params); // check the params value.
//   res.send("Wow! Hello there " + req.params.name);
// });

////////////////  Tip Calculator express application created   ////////////////

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send("How much your tip will be is " + req.params.tipPercentage);
});

// port setup
app.listen(3000, function () {
  console.log("Listening on port 3000");
});

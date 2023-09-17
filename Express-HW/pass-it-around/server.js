const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let num_of_bottles = 99;
  res.send(`<h1>${num_of_bottles} Bottles of beer on the wall</h1>
  <a href= '/${num_of_bottles - 1}'>take one down, pass it around </a>`);
});

// app.get("/:num_of_bottles", (req, res) => {
//   res.send(`<h1>${req.params.num_of_bottles} Bottles of beer on the wall</h1>
//     <a href= '/${req.params.num_of_bottles - 1}'>take one down, pass it around </a>`);
// });

app.get("/:num_of_bottles", (req, res) => {
  let bottleCount = parseInt(req.params.num_of_bottles);
  if (bottleCount <= 0) {
    res.send(`<h1> No more beer bottles on the wall</h1>
        <h><a href="/">Start over</a></h1>`);
  } else {
    res.send(`<h1>${req.params.num_of_bottles} Bottles of beer on the wall</h1>
        <a href= '/${
          req.params.num_of_bottles - 1
        }'>take one down, pass it around </a>`);
  }
});

// port setup
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

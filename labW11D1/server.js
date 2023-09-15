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

// app.get("/tip/:total/:tipPercentage", (req, res) => {
//   res.send("How much your tip will be is " + req.params.tipPercentage);
// });

/////////////////////// Magic 8 Ball express application created ////////////////////

/// my magic question is "Will I get a job", I didn't use the question from lab work

app.get("/magic/Will%20I%20get%20a%20job", (req, res) => {
  let magicArray = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let magicOutput = magicArray[Math.floor(Math.random() * magicArray.length)];
  res.send(`<h1>${magicOutput}</h1>`);
});

// port setup
app.listen(3000, function () {
  console.log("Listening on port 3000");
});

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// ->> API route too add two numbers
app.get("/add/:num1/:num2", (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers provided");
  }
  const result = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});

// ->> By this we can use this route in local server
// http://localhost:3000/add/num1/num2


const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));



app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/submit", (req, res) => {
    const number = req.body.number;
   

  console.log(number)
    if (number % 3 === 0 && number % 5 === 0) {
      result =  number + ' is FizzBuzz ';
    } else if (number % 3 === 0) {
      result = number + ' is Fizz ';
    } else if (number % 5 === 0) {
      result = number + ' is Buzz ';
    } else {
      result = number + ' ';
    }
  

  res.json({ result: result.trim() });

})

module.exports = app;

const express = require("express");

const app = express();

const port = 3333;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API",
  });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});

// import * as Express from "express";
const Express = require("express")

const app = Express();

const port: number = 3333;


app.get("/", (req: any, res: any) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API",
    data: null
  });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});

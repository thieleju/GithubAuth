// import * as Express from "express";
const Express = require("express");
const axios = require("axios");

const app = Express();

const port: number = 3333;

const clientId: string = "8344bb54da3857d95795";
const clientSecret: string = "bf33116f635771887586d1aacdbf6359d7f1a415";

app.get("/", (req: any, res: any) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API",
    data: null,
  });
});

app.get("/login", (req: any, res: any) => {
  res.redirect(
    "https://github.com/login/oauth/authorize?client_id=" + clientId
  );
});

app.get("/cb", async (req: any, res: any) => {
  try {
    // generate payload with code from github
    let payload = {
      client_id: clientId,
      client_secret: clientSecret,
      code: req.query.code,
    };

    // get access token from github
    let data = await axios.post(
      "https://github.com/login/oauth/access_token",
      payload
    );
    res.redirect("http://localhost:3000/cb?" + data.data);
  } catch (e: any) {
    res.status(401).json({ status: "error", message: e.toString() });
  }
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});

import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port: number = Number(process.env.SERVER_PORT);
const clientId: string = process.env.CLIENT_ID;
const clientSecret: string = process.env.CLIENT_SECRET;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hey, I'm alive!",
  });
});

app.get("/login", (req, res) => {
  res.redirect(
    "https://github.com/login/oauth/authorize?client_id=" + clientId
  );
});

app.get("/cb", async (req, res) => {
  try {
    // use code query parameter to get access_token from github
    const data = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: clientId,
        client_secret: clientSecret,
        code: req.query.code,
      }
    );

    // redirect to callback component with access token in query
    res.redirect("http://localhost:3000/cb?" + data.data);
  } catch (e) {
    res.status(401).json({ status: "error", message: e.toString() });
  }
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("Server listening on port " + port);
});

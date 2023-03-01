const express = require("express");
const cors = require("cors");
const app = express();

const port = 3003;

app.use(cors());

const menu = `<a href='/'>Home</a> <a href='/racoon'>Racon</a>  <a href='/fox'>Fox</a>  `;

// SERVER SIDE

app.get("/", (req, res) => {
  res.send(`${menu} <h1>Hello Home</h1>`);
  console.log(res);
});

app.get("/racoon", (req, res) => {
  res.send(`${menu} <h1>Hello Racoon</h1>`);
});

app.get("/fox", (req, res) => {
  res.send(`${menu} <h1>Hello Fox</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// API

app.get("/api/home", (req, res) => {
  res.json({ title: "Hello Forest", color: "white" });
});

app.get("/api/racoon", (req, res) => {
  res.json({ title: "Hello Racoon", color: "skyblue" });
});

app.get("/api/fox", (req, res) => {
  res.json({ title: "Hello Fox", color: "crimson" });
});

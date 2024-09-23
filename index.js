const express = require("express");
const { Client } = require("pg");
const path = require("path");
const bodyParser = require("body-parser");
const client = require("./db/database");

const app = express();
port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.error(err);
    res.status(500).send("cannot get");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

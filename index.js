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

client.connect();

app.get("/", async (req, res) => {
  try {
    const index = Math.floor(Math.random() * 100);
    const result = await client.query("SELECT * FROM health_facts where id=$1", [index]);
    data = result.rows[0];
    console.log(data);
    res.render("index", data);
  } catch (err) {
    console.error(err);
    res.status(500).send("cannot get");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

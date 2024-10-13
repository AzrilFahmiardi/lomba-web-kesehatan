const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const client = require("./db/database");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database.");
  }
});

app.get("/", async (req, res) => {
  try {
    const index = Math.floor(Math.random() * 10); // Pastikan ID ini valid
    const query = "SELECT * FROM health_facts WHERE id = ?"; // Ganti tanda tanya dengan placeholder untuk MySQL

    client.query(query, [index], (err, result) => {
      // Menggunakan callback MySQL
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Error executing query");
      }

      if (!result || result.length === 0) {
        return res.status(404).send("Data not found");
      }

      const data = result[0]; // Mengambil data dari hasil query
      console.log(data);
      res.render("index", { ...data }); // Kirim data ke template
    });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Cannot get");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

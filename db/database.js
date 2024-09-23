const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "functionality",
  password: "12345678",
  port: 5432,
});

module.exports = client;

const mysql = require("mysql");

const client = mysql.createConnection({
  user: "u951289607_azril",
  host: "srv594.hstgr.io",
  database: "u951289607_functionality",
  password: "sAee94[Rg",
  port: 3306,
});

module.exports = client;

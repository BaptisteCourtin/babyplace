const mysql = require("mysql2/promise");

const datasource = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Noize11e???",
  database: "babydb",
});

module.exports = datasource;

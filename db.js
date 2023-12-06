const mysql = require("mysql2");

const dbs = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "sma_connect_test",
});

module.exports = dbs;

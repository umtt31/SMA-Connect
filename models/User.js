const connection = require("../db");

const q = `CREATE TABLE User (
            id int NOT NULL PRIMARY KEY,
            firstName varchar(255),
            lastName varchar(255),
            email varchar(255) UNIQUE,
            password varchar(255),
            registerDate DATE,
            TC int,
            phoneNumber int,
            role varchar(20) NOT NULL CHECK(role IN ('doctor', 'patient', 'donator'))
            );`;

connection.query(q, (err, results) => {
  console.log(results); // results contains rows returned by server
});

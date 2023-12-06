const db = require("../db");

exports.getAllUsers = (req, res) => {
  const q = "SELECT * FROM users;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

exports.register = (req, res) => {
  // Get the current date in milliseconds since the Unix epoch
  const currentDate = new Date();

  // Extract the year, month, and day from the date
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Create the yyyy-mm-dd formatted date string
  const formattedDate = `${month}/${day}/${year}`;

  console.log(formattedDate);
  const q =
    "INSERT INTO users(`firstName`, `lastName`, `email`, `password`, `registerDate`, `role`) VALUES (?);";
  const VALUES = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password,
    formattedDate,
    req.body.role,
  ];
  db.query(q, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

exports.login = (req, res) => {
  const q = `SELECT * FROM users WHERE email = "${req.body.email}";`;
  db.query(q, (err, data) => {
    console.log(data);
    if (!data) return res.json("no such email");
    if (data[0].password == req.body.password) {
      console.log(data[0].idusers);
      req.session.userID = data[0].idusers;
      return res.json("successfull login");
    }
  });
};

exports.deleteUser = (req, res) => {
  const q = `DELETE FROM users WHERE idusers = ${req.params.id};`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

exports.updateUser = (req, res) => {
  const q = `UPDATE USERS
                SET firstName = '${req.body.firstName || null}', lastName = '${
    req.body.lastName || null
  }', email = '${req.body.email || null}', password = '${
    req.body.password || null
  }', TC = ${req.body.tc || null}, phoneNumber = ${
    req.body.phoneNumber || null
  }, role = '${req.body.role || "donator"}'
                WHERE idusers = ${req.params.id};`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

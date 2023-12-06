const db = require("../db");

exports.sendToApprovedWithFalse = (req, res) => {
  const q =
    "INSERT INTO doctors(`iddoctors`, `doctorsBarcodeNumber`) VALUES (?);";
  const values = [req.session.userID, req.body.doctorsBarcodeNumber];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

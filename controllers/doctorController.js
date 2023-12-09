const Doctor = require("../models/Doctor");

exports.sendToApprovedWithFalse = async (req, res) => {
  const doctorID = req.session.userID;
  const doctorsBarcodeNumber = req.body;
  const doctor = await Doctor.create({ doctorID, doctorsBarcodeNumber });
  return res.json(doctor);
};

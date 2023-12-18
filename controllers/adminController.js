const Doctor = require("../models/Doctor");

exports.approveDoctor = async (req, res) => {
  const doctor = await Doctor.findById(req.params.doctorId);
  doctor.isApproved = true;
  doctor.save();
  res.json("approved");
};

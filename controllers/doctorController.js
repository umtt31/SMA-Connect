const Campaign = require("../models/Campaign");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

exports.sendToApprovedWithFalse = async (req, res) => {
  const doctorID = req.session.userID;
  const doctorsBarcodeNumber = req.body;
  const doctor = await Doctor.create({ _id: doctorID, doctorsBarcodeNumber });
  return res.json(doctor);
};

exports.approveCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  campaign.isApprovedByDoctor = true;
  campaign.save();
  res.json("approved");
};

exports.approvePatient = async (req, res) => {
  const patient = await Patient.findById(req.params.patientId);
  patient.isApprovedByDoctor = true;
  patient.save();
  res.json("approved");
};

exports.getDashboardPage = (req, res) => {
  res.render('doctor.ejs')
}

exports.getProfilePage = (req, res) => {
  res.render('profile.ejs')
}

exports.getPatientPage = (req, res) => {
  res.render('patients.ejs')
}
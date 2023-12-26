const Campaign = require("../models/Campaign");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

exports.sendToApprovedWithFalse = async (req, res) => {
  const doctorID = req.session.userID;
  const doctorsBarcodeNumber = req.body;
  const doctor = await Doctor.create({ _id: doctorID, doctorsBarcodeNumber });
  return res.json(doctor);
};

exports.getDashboardPage = (req, res) => {
  res.render("doctor.ejs");
};

exports.getProfilePage = (req, res) => {
  res.render("profile.ejs");
};

exports.getPatientPage = async (req, res) => {
  const patientsNotApproved = await Patient.find({
    isApprovedByDoctor: false,
  }).populate("_id");
  res.render("patients.ejs", { patientsNotApproved });
};

exports.getCampaignPage = async (req, res) => {
  const campaignsNotApproved = await Campaign.find({
    isApprovedByDoctor: false,
  }).populate("user");
  console.log(campaignsNotApproved)
  res.render("Campaigns.ejs", { campaignsNotApproved });
};

exports.removePatient = async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.patientId);
  patient.save();
  res.redirect("/doctor/patients");
};

exports.approvePatient = async (req, res) => {
  const patient = await Patient.findById(req.params.patientId);
  patient.isApprovedByDoctor = true;
  patient.save();
  res.redirect("/doctor/patients");
};

exports.approveCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  campaign.isApprovedByDoctor = true;
  campaign.save();
  res.redirect("/doctor/campaigns");
};

exports.removeCampaign = async (req, res) => {
  const campaign = await Campaign.findByIdAndDelete(req.params.campaignId);
  campaign.save();
  res.redirect("/doctor/campaigns");
};

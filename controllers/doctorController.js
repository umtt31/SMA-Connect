const Campaign = require("../models/Campaign");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const User = require("../models/User");

exports.sendToApprovedWithFalse = async (req, res) => {
  const doctorID = res.locals.user._id;
  const doctorsBarcodeNumber = req.body;
  const doctor = await Doctor.create({ _id: doctorID, doctorsBarcodeNumber });
  return res.json(doctor);
};

exports.patients_get = async (req, res) => {
  const patientsNotApproved = await Patient.find({
    isApprovedByDoctor: false,
  }).populate("_id");
  res.render("patients.ejs", { patientsNotApproved });
};

exports.campaigns_get = async (req, res) => {
  const campaignsNotApproved = await Campaign.find({
    isApprovedByDoctor: false,
  }).populate("user");
  console.log(campaignsNotApproved)
  res.render("Campaigns.ejs", { campaignsNotApproved });
};

exports.patientRemove_post = async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.patientId);
  patient.save();
  res.redirect("/doctor/patients");
};

exports.patientApprove_post = async (req, res) => {
  const patient = await Patient.findById(req.params.patientId);
  patient.isApprovedByDoctor = true;
  patient.save();
  res.redirect("/doctor/patients");
};

exports.campaignApprove_post = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  campaign.isApprovedByDoctor = true;
  campaign.save();
  res.redirect("/doctor/campaigns");
};

exports.campaignRemove_post = async (req, res) => {
  const campaign = await Campaign.findByIdAndDelete(req.params.campaignId);
  campaign.save();
  res.redirect("/doctor/campaigns");
};

// ikbal
exports.dashboard_get = async(req, res) => {
  const user = await User.findById(res.locals.user._id);
  const doctor = await Doctor.findById(res.locals.user._id);
  const patient = await Patient.findById(res.locals.user._id);
  const campaign = await Campaign.find({ user: res.locals.user._id });

  res.render("doctor.ejs", {
    user,
    patient,
    campaign,
    doctor,
  });
}

exports.profile_get = async(req, res) => {
  res.render("profile.ejs");
}
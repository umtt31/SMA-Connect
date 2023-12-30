const Campaign = require("../models/Campaign");
const Patient = require("../models/Patient");
const User = require("../models/User");

exports.patient_post = async (req, res) => {
  const patientId = req.session.userID;
  const patient = await Patient.create({
    _id: patientId,
    statement: req.body.statement,
  });
  res.redirect("/patient");
};

exports.patientCampaignNew_post = async (req, res) => {
  const patient = await Patient.findById(req.session.userID);
  if (patient.isApprovedByDoctor === false) {
    res.json("to create a campaign first you need to approved by doctor");
  }
  const campaign = await Campaign.create({
    user: req.session.userID,
    description: req.body.description,
  });
  campaign.save();
  res.redirect("/patient");
};

exports.getPatientProfile = (req, res) => {
  res.render("patient-profile.ejs");
};

// ikbal yazdı doğru inş
exports.patientProfile_get = async(req,res) => {
  const user = await User.findById(req.session.userID);
  const patient = await Patient.findById(req.session.userID);
  const campaign = await Campaign.find({ user: req.session.userID });

  console.log(campaign.current)

  res.render("patient-profile.ejs", {
    user,
    patient,
    campaign,
  });
}
// buraya kadar

exports.patient_get = async (req, res) => {
  const patient = await Patient.findById(req.session.userID);
  const campaign = await Campaign.find({ user: req.session.userID });

  res.render("patient-donation.ejs", {campaign, patient});
};


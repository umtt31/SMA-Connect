const Campaign = require("../models/Campaign");
const Patient = require("../models/Patient");
const User = require("../models/User");

exports.createPatient = async (req, res) => {
  const patientId = req.session.userID;
  const patient = await Patient.create({ _id: patientId });
  return res.json(patient);
};

exports.createCampaign = async (req, res) => {
  const patient = await Patient.findById(req.session.userID);
  if (patient.isApprovedByDoctor === false) {
    res.json("to create a campaign first you need to approved by doctor");
  }
  const campaign = await Campaign.create({
    user: req.session.userID,
    description: req.body.description,
  });
  return res.json(campaign);
};

exports.getAllPatients = async (req, res) => {
  const patients = await Patient.find({});
  res.json(patients);
};

exports.findPatient = async (patientId) => {
  const patient = await Patient.findById(patientId);
  return patient;
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  isApprovedByDoctor: { type: Boolean, default: false },
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;

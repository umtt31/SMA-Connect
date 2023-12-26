const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isApprovedByDoctor: { type: Boolean, default: false },
  statement: { type: String },
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;

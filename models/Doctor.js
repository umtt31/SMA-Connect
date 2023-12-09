const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  doctorBarcodeNumber: { type: String },
  isApproved: { type: Boolean, default: false },
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;

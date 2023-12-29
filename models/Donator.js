const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonatorSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  totalDonation: { type: Number, default: 0 },
});

const Donator = mongoose.model("Donator", DonatorSchema);

module.exports = Donator;

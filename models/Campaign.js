const mongoose = require("mongoose");
const Donator = require("./Donator");
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: { type: String },
  need: { type: Number, default: 86948400 },
  current: { type: Number, default: 0 },
  donators: [{ type: mongoose.Types.ObjectId, ref: 'Donator' }],
  isApprovedByDoctor: { type: Boolean, default: false },
  isDone: { type: Boolean, default: false },
});

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;

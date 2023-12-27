const Campaign = require("../models/Campaign");
const Donator = require("../models/Donator");

exports.getDonationPage = async (req, res) => {
  res.render("donation.ejs");
};

exports.getDonation = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  const donator = await Donator.findById(req.session.userID);
  donator.totalDonation += req.body.amount;
  campaign.current += req.body.amount;
  campaign.save();
  res.redirect(`/campaign/${req.params.campaignId}`);
};

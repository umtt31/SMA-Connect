const Campaign = require("../models/Campaign");
const Donator = require("../models/Donator");

exports.getDonationPage = async (req, res) => {
  const campaignId = req.params.campaignId;
  res.render("donation.ejs", { campaignId });
};

exports.getDonation = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  const donator = await Donator.findById(req.session.userID);
  donator.totalDonation += parseInt(req.body.amount);
  campaign.current += parseInt(req.body.amount);
  campaign.donators.push(donator._id);
  if (campaign.need < campaign.current) {
    campaign.isDone = true;
  }
  campaign.save();
  donator.save();
  res.redirect(`/campaign/${req.params.campaignId}`);
};

const Campaign = require("../models/Campaign");
const Donator = require("../models/Donator");

exports.donationCampaignid_get = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId).populate('user')
  res.render("donation.ejs", { campaign });
};

exports.donationCampaignid_post = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  const donator = await Donator.findById(req.session.userID);
  console.log(req.session.userID)
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

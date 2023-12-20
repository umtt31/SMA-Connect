const Campaign = require("../models/Campaign");

exports.getAllCampaigns = async () => {
  const campaigns = await Campaign.find({}).populate('user');
  return campaigns;
};

exports.getSingleCampaignPage = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId).populate('user');
  console.log(campaign)
  res.render("feed-one.ejs", { campaign });
};

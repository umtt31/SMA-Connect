const Campaign = require("../models/Campaign");

exports.getAllCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({});
  res.json(campaigns);
};

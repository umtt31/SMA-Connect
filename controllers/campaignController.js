const Campaign = require("../models/Campaign");

exports.campaignCampaignid_get = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId).populate(
    "user"
  );
  console.log(campaign);
  res.render("feed-one.ejs", { campaign });
};

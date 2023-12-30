const Donator = require("../models/Donator");
const Campaign = require('../models/Campaign')

exports.getAllDonators = async (req, res) => {
  const donators = await Donator.find({});
  res.json(donators);
};

exports.createDonator = async (req, res) => {
  const donatorId = req.session.userID;
  const donator = await Donator.create({ _id: donatorId });
  return res.json(donator);
};

exports.makeDonation = async (req, res) => {
  const campaign = await Campaign.findById(req.params.campaignId);
  const donator = await Donator.findById(req.session.userID);
  if (campaign.isDone === false) {
    campaign.current += req.body.donation;
    donator.totalDonation += req.body.donation;
    if (campaign.current == campaign.need) {
      campaign.isDone = true;
    }
    await campaign.save();
    await donator.save();
    res.json("donated");
  } else {
    res.json("you cant make donation to campaign is already finished");
  }
};

// ikbal
exports.donator_get = async (req, res) => {
  const donator = await Donator.findById(req.session.userID).populate('_id')
  // const campaign = await Campaign.find({ user: req.session.userID });

  console.log(donator)

  res.render("donator-dashboard.ejs", {
    donator
  });
}

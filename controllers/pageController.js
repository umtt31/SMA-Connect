const campaignController = require("../controllers/campaignController");
const patientController = require("../controllers/patientController");
const Campaign = require("../models/Campaign");

exports.home_get = async (req, res) => {
  const campaigns = await Campaign.find({}).populate("user");
  res.render("index.ejs", { campaigns });
};

exports.about_get = (req, res) => {
  res.render("about.ejs");
};

exports.contact_get = (req, res) => {
  res.render("contact.ejs");
};

exports.getFeedPage = (req, res) => {
  res.render("feed-one.ejs");
};

exports.gallery_get = (req, res) => {
  res.render("gallery.ejs");
};

exports.howItWorks_get = (req, res) => {
  res.render("how-it-works.ejs");
};



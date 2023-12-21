const campaignController = require("../controllers/campaignController");
const patientController = require("../controllers/patientController");
const Campaign = require("../models/Campaign");
const User = require("../models/User");

exports.getHomePage = async (req, res) => {
  const currentUser = await User.findById(req.session.userID);
  console.log(currentUser);

  const campaigns = await Campaign.find({}).populate("user");
  for (const x in campaigns) {
    console.log(x.user);
  }
  res.render("index.ejs", { campaigns, currentUser });
};

exports.getMainPage = (req, res) => {
  res.render("main.ejs");
};

exports.getAboutPage = (req, res) => {
  res.render("about.ejs");
};

exports.getBlogPage = (req, res) => {
  res.render("blog.ejs");
};

exports.getContactPage = (req, res) => {
  res.render("contact.ejs");
};

exports.getDonatePage = (req, res) => {
  res.render("donation.ejs");
};

exports.getFeedPage = (req, res) => {
  res.render("feed-one.ejs");
};

exports.getGalleryPage = (req, res) => {
  res.render("gallery.ejs");
};

exports.getHowItWorksPage = (req, res) => {
  res.render("how-it-works.ejs");
};

exports.getLoginPage = (req, res) => {
  res.render("login.ejs");
};

exports.getSignupPage = (req, res) => {
  res.render("signup.ejs");
};

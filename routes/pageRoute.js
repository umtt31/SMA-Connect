const express = require("express");

const pageController = require("../controllers/pageController.js");
const userController = require("../controllers/userController.js");
const donatorController = require("../controllers/donatorController.js");
const campaignController = require("../controllers/campaignController.js");
const checkUserMiddleware = require("../middlewares/checkUserMiddleware.js");
const donationController = require("../controllers/donationController.js");

const router = express.Router();

// Render Page
router.route("").get(pageController.home_get);
router.route("/about").get(pageController.about_get);
router.route("/contact").get(pageController.contact_get);
router.route("/feed").get(pageController.getFeedPage);
router.route("/gallery").get(pageController.gallery_get);
router.route("/how-it-works").get(pageController.howItWorks_get);

// User
router.route("/login").get(userController.login_get);
router.route("/login").post(userController.login_post);

router.route("/logout").get(userController.logout_get);

router.route("/register").get(userController.register_get);
router.route("/register").post(userController.register_post);

// donator
router
  .route("/donator")
  .get(checkUserMiddleware.checkIfDonator, donatorController.donator_get);

// campaign
router
  .route("/campaign/:campaignId")
  .get(campaignController.campaignCampaignid_get); // single campaign page

// donation
router
  .route("/donation/:campaignId")
  .get(donationController.donationCampaignid_get);
router
  .route("/donation/:campaignId")
  .post(
    checkUserMiddleware.checkIfDonator,
    donationController.donationCampaignid_post
  );

module.exports = router;

const express = require("express");

const pageController = require("../controllers/pageController.js");

const router = express.Router();

router.route("").get(pageController.getHomePage);
router.route("/main").get(pageController.getMainPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/blog").get(pageController.getBlogPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/donate").get(pageController.getDonatePage);
router.route("/feed").get(pageController.getFeedPage);
router.route("/gallery").get(pageController.getGalleryPage);
router.route("/how-it-works").get(pageController.getHowItWorksPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/register").get(pageController.getSignupPage);

module.exports = router;

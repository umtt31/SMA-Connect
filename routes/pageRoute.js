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

module.exports = router;

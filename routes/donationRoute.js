const express = require("express");

const donationController = require("../controllers/donationController.js");
const checkUserMiddleware = require("../middlewares/checkUserMiddleware.js");

const router = express.Router();

router.route("/:campaignId").get(donationController.getDonationPage);
router
  .route("/:campaignId")
  .post(
    checkUserMiddleware.checkUserDonator,
    donationController.getDonation
  );

module.exports = router;

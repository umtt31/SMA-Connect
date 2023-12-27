const express = require("express");

const donationController = require("../controllers/donationController.js");

const router = express.Router();

router.route("/:campaignId").get(donationController.getDonationPage);
router.route('/:campaignId').post(donationController.getDonation)

module.exports = router;

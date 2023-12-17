const express = require("express");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const campaignController = require("../controllers/campaignController.js");
const donatorController = require("../controllers/donatorController.js");

const router = express.Router();

router.route("").get(campaignController.getAllCampaigns);
router.route("/:campaignId").get(); // single campaign page
router.route("/:campaignId").post(donatorController.makeDonation);

module.exports = router;

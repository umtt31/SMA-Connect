const express = require("express");

const doctorController = require("../controllers/doctorController.js");

const router = express.Router();

router.route("").post(doctorController.sendToApprovedWithFalse);
router.route("/campaign/:campaignId").post(doctorController.approveCampaign);
router.route("/patient/:patientId").post(doctorController.approvePatient);

module.exports = router;

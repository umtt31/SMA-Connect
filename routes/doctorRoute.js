const express = require("express");

const doctorController = require("../controllers/doctorController.js");

const router = express.Router();

router.route("").get(doctorController.getDashboardPage);
router.route("").post(doctorController.sendToApprovedWithFalse);
router.route("/patients").get(doctorController.getPatientPage);
router.route('/campaigns').get(doctorController.getCampaignPage)
router.route("/profile").get(doctorController.getProfilePage);
router
  .route("/patient/approve/:patientId")
  .post(doctorController.approvePatient);
router.route("/patient/remove/:patientId").post(doctorController.removePatient);
router
  .route("/campaign/approve/:campaignId")
  .post(doctorController.approveCampaign);
router
  .route("/campaign/remove/:campaignId")
  .post(doctorController.removeCampaign);

module.exports = router;

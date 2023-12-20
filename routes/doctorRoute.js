const express = require("express");

const doctorController = require("../controllers/doctorController.js");

const router = express.Router();

router.route("").get(doctorController.getDashboardPage)
router.route("").post(doctorController.sendToApprovedWithFalse);
router.route("/campaign/:campaignId").post(doctorController.approveCampaign);
router.route("/patient/:patientId").post(doctorController.approvePatient);
router.route('/patients').get(doctorController.getPatientPage)
router.route('/profile').get(doctorController.getProfilePage)

module.exports = router;

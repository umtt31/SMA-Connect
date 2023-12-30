const express = require("express");

const doctorController = require("../controllers/doctorController.js");
const checkUserMiddleware = require("../middlewares/checkUserMiddleware.js");

const router = express.Router();

router
  .route("")
  .get(checkUserMiddleware.checkIfDoctor, doctorController.dashboard_get);
router
  .route("")
  .post(
    checkUserMiddleware.checkIfDoctor,
    doctorController.sendToApprovedWithFalse
  );
router
  .route("/patients")
  .get(checkUserMiddleware.checkIfDoctor, doctorController.patients_get);
router
  .route("/campaigns")
  .get(checkUserMiddleware.checkIfDoctor, doctorController.campaigns_get);
router
  .route("/profile")
  .get(checkUserMiddleware.checkIfDoctor, doctorController.profile_get);

// Approvement
router
  .route("/patient/approve/:patientId")
  .post(
    checkUserMiddleware.checkIfDoctor,
    doctorController.patientApprove_post
  );
router
  .route("/patient/remove/:patientId")
  .post(checkUserMiddleware.checkIfDoctor, doctorController.patientRemove_post);
router
  .route("/campaign/approve/:campaignId")
  .post(
    checkUserMiddleware.checkIfDoctor,
    doctorController.campaignApprove_post
  );
router
  .route("/campaign/remove/:campaignId")
  .post(
    checkUserMiddleware.checkIfDoctor,
    doctorController.campaignRemove_post
  );

module.exports = router;

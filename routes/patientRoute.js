const express = require("express");

const patientController = require("../controllers/patientController.js");
const checkUserMiddleware = require("../middlewares/checkUserMiddleware.js");

const router = express.Router();

router
  .route("")
  .get(checkUserMiddleware.checkIfPatient, patientController.patient_get);
router
  .route("")
  .post(checkUserMiddleware.checkIfPatient, patientController.patient_post);
router
  .route("/profile")
  .get(
    checkUserMiddleware.checkIfPatient,
    patientController.patientProfile_get
  );
router
  .route("/campaign/new")
  .post(
    checkUserMiddleware.checkIfPatient,
    patientController.patientCampaignNew_post
  );

module.exports = router;

const express = require("express");

const patientController = require("../controllers/patientController.js");

const router = express.Router();

router.route("").get(patientController.getPatientDonation);
router.route("/profile").get(patientController.getPatientProfile);
router.route("").post(patientController.createPatient);
router.route("/campaign/new").post(patientController.createCampaign);

// router.route("").get(userController.getAllUsers);
// router.route("/register").post(userController.register);
// router.route("/login").post(userController.login);
// router.route("/:id").delete(userController.deleteUser);
// router.route("/:id").put(userController.updateUser);

module.exports = router;

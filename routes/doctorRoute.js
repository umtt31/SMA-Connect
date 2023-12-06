const express = require("express");

const doctorController = require("../controllers/doctorController.js");

const router = express.Router();

router.route("").post(doctorController.sendToApprovedWithFalse);

module.exports = router;
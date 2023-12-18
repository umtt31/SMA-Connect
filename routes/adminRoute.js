const express = require("express");

const adminController = require("../controllers/adminController.js");

const router = express.Router();

router.route("/:doctorId").post(adminController.approveDoctor);

module.exports = router;

const express = require("express");

const donatorController = require("../controllers/donatorController.js");

const router = express.Router();

router.route("").post(donatorController.createDonator);
router.route("").get(donatorController.getAllDonators);
// router.route("/login").post(userController.login);
// router.route("/:id").delete(userController.deleteUser);
// router.route("/:id").put(userController.updateUser);

module.exports = router;

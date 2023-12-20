const express = require("express");

const userController = require("../controllers/userController.js");

const router = express.Router();

router.route("").get(userController.getAllUsers);
router.route("/register").post(userController.register);

router.route("/:id").delete(userController.deleteUser);
router.route("/:id").put(userController.updateUser);

module.exports = router;

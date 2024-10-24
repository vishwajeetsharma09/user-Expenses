const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/", userController.createUser); // Create user
router.get("/:user_id", userController.getUserDetails); // Retrieve user details

module.exports = router;

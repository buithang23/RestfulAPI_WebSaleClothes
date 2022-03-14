const express = require("express");
const AuthController = require("../controller/AuthController");
const router = express.Router();

router.post("/login", AuthController.login);
router.put("/register", AuthController.register);
router.post("/forgot", AuthController.forgotPassword);
router.post("/reset", AuthController.resetPassword);
module.exports = router;

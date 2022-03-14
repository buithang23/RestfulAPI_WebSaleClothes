const express = require("express");
const UserController = require("../controller/UserController");
const { AuthJWT } = require("../middlewares/jwt");
const { userRole } = require("../middlewares/CheckRoles");
const router = express.Router();

router.get("/", AuthJWT, userRole("admin"), UserController.getAllUser);
router.get("/:id", UserController.getUser);
router.delete("/:id", AuthJWT, UserController.deleteUser);
router.patch("/", AuthJWT, UserController.updateUser);
router.post("/", AuthJWT, UserController.updatePassword);
module.exports = router;

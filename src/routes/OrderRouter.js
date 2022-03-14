const express = require("express");
const OrderController = require("../controller/OrderController");
const { AuthJWT } = require("../middlewares/jwt");
const { userRole } = require("../middlewares/CheckRoles");
const { ROLES } = require("../constants/role");
const router = express.Router();

router.get("/", AuthJWT, userRole(ROLES.ADMIN), OrderController.getAllOrder);
router.patch("/", AuthJWT, userRole(ROLES.ADMIN), OrderController.changeStatus);

module.exports = router;

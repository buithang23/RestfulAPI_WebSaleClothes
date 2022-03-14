const express = require("express");
const prodcutController = require("../controller/ProductController");
const { AuthJWT } = require("../middlewares/jwt");
const { userRole } = require("../middlewares/CheckRoles");
const router = express.Router();

router.get("/", AuthJWT, userRole("admin"), prodcutController.getAllProduct);
router.post("/", AuthJWT, userRole("admin"), prodcutController.createProduct);
router.get("/:id", AuthJWT, userRole("admin"), prodcutController.getProduct);
router.post(
  "/:productId",
  AuthJWT,
  userRole("admin"),
  prodcutController.createProductColor
);
router.patch(
  "/:id",
  AuthJWT,
  userRole("admin"),
  prodcutController.updateProduct
);
router.delete(
  "/:id",
  AuthJWT,
  userRole("admin"),
  prodcutController.deleteProduct
);
module.exports = router;

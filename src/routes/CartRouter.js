const express = require("express");
const CartController = require("../controller/CartController");
const { AuthJWT } = require("../middlewares/jwt");
const router = express.Router();

router.get("/", AuthJWT, CartController.getCart);
router.put("/", AuthJWT, CartController.addCart);
router.delete("/:id", AuthJWT, CartController.deleteCartProduct);
router.post("/:CartID", CartController.buyCart);
router.patch("/:id", CartController.updateCartProduct);

module.exports = router;

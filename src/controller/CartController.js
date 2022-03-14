const Order = require("../modeljs/Order");
const OrderDetail = require("../modeljs/OrderDetail");
const ApiError = require("../utils/ApiError");
const { STATUS } = require("../constants/status");
const CatchAsync = require("../middlewares/CatchAsync");

exports.getCart = CatchAsync(async (req, res) => {
  const Customer = req.user.Email;
  // check Cart already exist or not
  const ExistCart = await Order.findOne({ Customer, Status: STATUS.PENDING });
  // Create new one if is not exist
  if (!ExistCart) {
    await Order.create({ Customer });
    throw new ApiError(400, "Don't have any product in cart");
  }
  // Find Product in Cart
  const CartProduct = await OrderDetail.find({ OrderID: ExistCart._id });
  if (Object.keys(CartProduct).length === 0) {
    throw new ApiError(400, "Don't have any product in cart");
  }
  res.json({
    success: true,
    data: CartProduct,
  });
});
exports.addCart = CatchAsync(async (req, res) => {
  const Customer = req.user.Email;
  const { ProductID, Color, Size, Amount } = req.body;
  // check Cart already exist or not
  const ExistCart = await Order.findOne({ Customer, Status: "PENDING" });
  // Create new one if is not exist
  if (!ExistCart) {
    const Cart = await Order.create(Customer);
    const CartDetail = await OrderDetail.create({
      OrderID: Cart._id,
      ProductID,
      Color,
      Size,
      Amount,
    });
    res.json({
      success: true,
      data: CartDetail,
    });
  }
  // if cart already exist
  // Check Product has exist in cart
  const ExistProduct = await OrderDetail.findOne({
    OrderID: ExistCart._id,
    ProductID,
    Color,
    Size,
  });
  // if dont have. Create new one
  if (!ExistProduct) {
    console.log(ExistProduct);
    const CartDetail = await OrderDetail.create({
      OrderID: ExistCart._id,
      ProductID,
      Color,
      Size,
      Amount,
    });
    res.json({
      success: true,
      data: CartDetail,
    });
  }
  // if already exists increase the number by 1
  ExistProduct.Amount += 1;
  ExistProduct.save();
  res.json({
    success: true,
    data: ExistProduct,
  });
});
exports.updateCartProduct = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const { Color, Size, Amount } = req.body;
  // check product and upadate
  const CartProduct = await OrderDetail.findByIdAndUpdate(
    id,
    {
      Color,
      Size,
      Amount,
    },
    { new: true }
  );
  res.json({
    success: true,
    data: CartProduct,
  });
});
exports.deleteCartProduct = CatchAsync(async (req, res) => {
  const { id } = req.params;
  //find prodcut in cart with id and delete it
  const CartProduct = await OrderDetail.findByIdAndDelete(id);
  if (!CartProduct) {
    throw new ApiError(400, "Product not found");
  }
  res.json({
    success: true,
  });
});
exports.buyCart = CatchAsync(async (req, res) => {
  const { CartID } = req.params;
  //check cart have any product
  const ExistProduct = await OrderDetail.find({
    OrderID: CartID,
  });
  if (Object.keys(ExistProduct).length === 0) {
    throw new ApiError(400, "Product not found");
  }
  const ExistCart = await Order.findByIdAndUpdate(
    CartID,
    {
      Status: STATUS.WAITCONFRIM,
    },
    { new: true }
  );
  res.json({
    success: true,
    data: ExistCart,
  });
});

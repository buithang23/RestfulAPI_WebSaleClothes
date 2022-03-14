const User = require("../modeljs/User");
const Order = require("../modeljs/Order");
const Orderdetail = require("../modeljs/OrderDetail");
const CatchAsync = require("../middlewares/CatchAsync");
const ApiError = require("../utils/ApiError");

exports.getAllUser = CatchAsync(async (req, res) => {
  console.log(req.user);
  const users = await User.find({});
  res.json({
    success: true,
    data: users,
  });
});

exports.getUser = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(400, "Not Found");
  }
  if (!user.isActive) {
    throw new ApiError(400, "User has Block");
  }
  res.json({
    success: true,
    data: user,
  });
});

exports.deleteUser = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id, { isActive: false }, true);
  res.json({
    success: true,
    data: user,
  });
});

exports.updateUser = CatchAsync(async (req, res) => {
  const id = req.user.id;
  const { Name, Address, Telephone, Age } = req.body;
  const user = await User.findOneAndUpdate(
    id,
    {
      Name,
      Address,
      Telephone,
      Age,
    },
    {
      new: true,
    }
  );
  res.json({
    success: true,
    data: user,
  });
});

exports.updatePassword = CatchAsync(async (req, res) => {
  const id = req.user.id;
  const { newpassord, confirmpassword } = req.body;
  const existUser = await User.findById(id);
  if (newpassord !== confirmpassword) {
    throw new ApiError(400, "Confirm password not incorrest");
  }
  if (!existUser) {
    throw new ApiError(404, "User not found");
  }
  existUser.Password = newpassord;
  await existUser.save();
  res.json({
    success: true,
  });
});

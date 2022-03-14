const Order = require("../modeljs/Order");
const CatchAsync = require("../middlewares/CatchAsync");
const { STATUS } = require("../constants/status");
const { ROLES } = require("../constants/role");
const ApiError = require("../utils/ApiError");

const updateStatus = async (OrderID, status) => {
  const order = await Order.findByIdAndUpdate(
    OrderID,
    {
      Status: status,
    },
    { new: true }
  );
  return order;
};

exports.getAllOrder = CatchAsync(async (req, res) => {
  const order = await Order.find({
    Status: { $ne: STATUS.PENDING },
  }).populate("User");
  if (!order) {
    throw new ApiError(400, "Do not have any Order");
  }
  res.json({
    success: true,
    data: order,
  });
});

exports.changeStatus = CatchAsync(async (req, res) => {
  const { OrderID, Stauts, Action } = req.body;
  const role = req.user.Role;
  const order = {};
  if (Action === "Canceled") {
    order = await Order.findByIdAndUpdate(
      OrderID,
      {
        Status: STATUS.CANCELLED,
      },
      { new: true }
    );
  }
  if (Action == "Confirm" && role === ROLES.ADMIN) {
    switch (Stauts) {
      case STATUS.WAITCONFRIM: {
        order = updateStatus(OrderID, STATUS.AWAITINGPICKUP);
      }
      case STATUS.AWAITINGPICKUP: {
        order = updateStatus(OrderID, STATUS.SHIPMENT);
      }
      case STATUS.SHIPMENT: {
        order = updateStatus(OrderID, STATUS.COMPLETED);
      }
    }
  } else {
    throw new ApiError(401, "Unauthorized");
  }
  res.json({
    success: true,
    data: order,
  });
});

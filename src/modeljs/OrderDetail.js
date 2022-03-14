const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderDetailSchema = new Schema(
  {
    OrderID: {
      type: mongoose.Types.ObjectId,
      required: [true, "OrderID must be require"],
      ref: "Cart",
    },
    ProductID: {
      type: mongoose.Types.ObjectId,
      required: [true, "ProductID must be require"],
      ref: "Product",
    },
    Color: {
      type: String,
      required: [true, "Color must be require"],
    },
    Size: {
      type: Number,
      required: [true, "Size must be require"],
    },
    Amount: {
      type: Number,
      default: 1,
    },
  },
  {
    collection: "bt-OrderDetail",
  }
);

module.exports = mongoose.model("OrderDetail", OrderDetailSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { STATUS } = require("../constants/status");
const Orderchema = new Schema(
  {
    Customer: {
      type: String,
      required: [true, "Customer must be require"],
    },
    Status: {
      type: String,
      enum: STATUS,
      default: STATUS.PENDING,
    },
  },
  {
    collection: "bt-Order",
    toJSON: {
      virtuals: true,
    },
  }
);

Orderchema.virtual("User", {
  ref: "User",
  localField: "Customer",
  foreignField: "Email",
  justOne: "true",
});
mongoose.set("runValidators", true);
module.exports = mongoose.model("Order", Orderchema);

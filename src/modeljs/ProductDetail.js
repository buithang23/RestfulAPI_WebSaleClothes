const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductDetailSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    Color: {
      type: String,
      required: [true, "Color is required"],
    },
    Size: {
      type: Number,
      required: [true, "Size is required"],
    },
    Quality: {
      type: Number,
      required: [true, "Quality is required"],
    },
  },
  { collection: "bt-productdetail" }
);

module.exports = mongoose.model("ProductDetail", ProductDetailSchema);

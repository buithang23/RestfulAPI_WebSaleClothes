const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {
    NameProduct: {
      type: String,
      required: [true, "Name Product is required"],
    },
    TypeProduct: {
      type: String,
      required: [true, "Type Product is required"],
    },
    Price: {
      type: Number,
      required: [true, "Price is required"],
    },
    Description: {
      type: String,
    },
  },
  {
    collection: "bt-Products",
  }
);
module.exports = mongoose.model("Product", ProductSchema);

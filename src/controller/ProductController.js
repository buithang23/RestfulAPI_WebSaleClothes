const Product = require("../modeljs/Product");
const CatchAsync = require("../middlewares/CatchAsync");
const ApiError = require("../utils/ApiError");
const ProductDetail = require("../modeljs/ProductDetail");

exports.getAllProduct = CatchAsync(async (req, res) => {
  const product = await Product.find();
  if (!product) {
    throw new ApiError(400, "Product not found");
  }
  res.json({
    data: product,
  });
});
exports.getProduct = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const productColor = await ProductDetail.find({ productId: id });
  if (!product) {
    throw new ApiError(400, "Product not found");
  }
  if (!productColor) {
    res.json({
      success: true,
      data: product,
    });
  }
  res.json({
    success: true,
    data: product,
    productColor,
  });
});
exports.createProduct = CatchAsync(async (req, res) => {
  const { NameProduct, TypeProduct, Price, Description } = req.body;
  const product = await Product.create({
    NameProduct,
    TypeProduct,
    Price,
    Description,
  });
  res.json({
    success: true,
    data: product,
  });
});
exports.deleteProduct = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  const productDetail = await ProductDetail.deleteMany({ productId: id });
  res.json({
    success: true,
  });
});
exports.updateProduct = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const { NameProduct, Price, description } = req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    {
      NameProduct,
      Price,
      description,
    },
    {
      new: true,
    }
  );
  res.json({
    success: true,
    data: product,
  });
});
exports.createProductColor = CatchAsync(async (req, res) => {
  const { productId } = req.params;
  const { Color, Size, Quality } = req.body;
  const productColor = await ProductDetail.create({
    productId,
    Color,
    Size,
    Quality,
  });
  res.json({
    success: true,
    data: productColor,
  });
});
